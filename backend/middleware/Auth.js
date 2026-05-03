const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

const auth = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "Authentication token required" });
    }

    // Header format: "Bearer <token>"
    const token = authorization.split(' ')[1];

    try {
        const { _id } = jwt.verify(token, process.env.SECRET);
        
        // Attach user ID to the request object for use in controllers
        req.user = await User.findOne({ _id }).select('_id');
        
        if (!req.user) throw new Error('User not found');
        
        next();
    } catch (error) {
        res.status(401).json({ error: 'Request is not authorized' });
    }
};

module.exports = auth;