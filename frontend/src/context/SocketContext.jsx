import { createContext, useEffect, useState, useContext } from 'react';
import { useAuthContext } from './AuthContext.jsx';
import io from 'socket.io-client';

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const newSocket = io("https://chatapp-7a36.onrender.com/", {
                query: {
                    userId: authUser._id
                }
            });
            setSocket(newSocket);
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]); // Run this effect only when authUser changes

    useEffect(() => {
        if (socket) {
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

            // Cleanup function to close the socket when the component unmounts or authUser changes
            return () => {
                socket.close();
            };
        }
    }, [socket]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContext;