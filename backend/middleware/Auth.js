const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

const auth = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "Authentication token required" });
    }

    // Corrected split logic: split by space ' '
    const token = authorization.split(' ')[1];

    try {
        // Verify the token
        const { _id } = jwt.verify(token, process.env.JWT_TOKEN);

        // Attach only the ID to the request object to keep it light
        // We use .select('_id') to avoid fetching unnecessary sensitive data
        req.user = await User.findOne({ _id }).select('_id');
        
        if (!req.user) {
            return res.status(401).json({ error: 'User no longer exists' });
        }
        
        next();
    } catch (error) {
        console.error(error); // Helpful for debugging server-side
        res.status(401).json({ error: 'Request is not authorized' });
    }
};

module.exports = auth;