# MERN Stack Real-Time Chat App

A real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js, Vite) with JWT authentication and Socket.io for real-time communication.

## Features

- User authentication with JWT
- Real-time messaging with Socket.io
- Private and group chats
- Responsive design
- MongoDB for data storage

## Technologies Used

- **Frontend:** React.js, Redux, Socket.io-client, CSS/SCSS
- **Backend:** Node.js, Express.js, MongoDB, Socket.io, JWT, bcrypt.js

## Installation
- For simple usage running locally :

- npm run server
  
- cd frontend
- npm run dev

  

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/mern-chat-app.git
    cd mern-chat-app
    ```

2. **Install dependencies:**
    - Backend: 
      ```bash
      cd backend && npm install
      ```
    - Frontend: 
      ```bash
      cd frontend && npm install
      ```

3. **Set up environment variables:**  
   Create a `.env` file in the `backend` directory with the following:
    ```plaintext
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    SOCKET_PORT=your_socket_io_port
    ```

4. **Run the development servers:**
    - Backend: 
      ```bash
      cd backend && npm run dev
      ```
    - Frontend: 
      ```bash
      cd frontend && npm start
      ```

## Usage

1. Register or log in.
2. Start or join a chat.
3. Enjoy real-time messaging.

## Project Structure

```bash
mern-chat-app/
├── backend/                # Express server & API
├── frontend/               # React client
└── .env                    # Environment variables

