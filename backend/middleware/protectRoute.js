import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    try {
        // Retrieve the JWT from cookies
        const token = req.cookies.jwt;

        // Check if the token exists
        if (!token) {
            return res.status(401).json({ message: "Unauthorized - no token provided" });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized - invalid token" });
        }

        // Find the user associated with the decoded token
        const user = await User.findById(decoded.userId).select("-password");
        
        // Check if the user exists
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Attach the user to the request object
        req.user = user;

        // Continue to the next middleware or route handler
        next();
    }
    catch (error) {
        // Log the error and return a 500 status
        console.error("Error in protectRoute middleware:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default protectRoute;
