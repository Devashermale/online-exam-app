const user = require('../model/userSchema')
const jwt = require('jsonwebtoken')

const createtoken = (_id)=>{
    return jwt.sign({_id},process.env.JWT_TOKEN,{expiresIn:'24h'})
}
const createuser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const newUser = await user.createUser({ name, email, password, role });

        const token = createtoken(newUser._id);

        return res.status(200).json({ newUser, token });

    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await user.find({})
       return res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message })
    }
}
const getUserById = async (req, res) => {
    try {
        const userId = req.params.id
        const userData = await user.findById(userId)
        if (!userData) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error: error.message })
    }
}


const loginuser = async (req, res) => {
    const { email, password, role } = req.body;
    try {
        const users = await user.Login({ email, password, role });
        const token = createtoken(users._id);
        
        // Ensure you are SENDING this object
        // If you just call the function without 'res.json', it returns 204
        return res.status(200).json({ email, token, role }); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createuser,
    getAllUsers,
    getUserById,
    loginuser
}   