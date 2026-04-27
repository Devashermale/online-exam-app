const user = require('../model/userSchema')
const jwt = require('jsonwebtoken')

const createtoken = (_id)=>{
    return jwt.sign({_id},process.env.JWT_TOKEN,{expiresIn:'24h'})
}
const createuser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body 
   
        const newUser = new user({
            name,
            email,
            password,
            role
        })
        await newUser.save()
      const token = createtoken(newUser._id)
     return res.status(200).json(newUser,token)

    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message })
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

const updateUser = async (req, res) => {
    try {       
        const { name, email, password, role } = req.body
        const updatedUser = await user.findByIdAndUpdate(
            req.params.id,
            { name, email, password, role },
            { new: true }
        )
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await user.findByIdAndDelete(req.params.id)
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message })
    }
}

module.exports = {
    createuser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}   