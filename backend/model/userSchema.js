const mongoose =require('mongoose')
const validator = require('validator');

const userSchema = mongoose.Schema({
    name: { 
        type: String,
        required: true
     },
    email: {
        type: String,
        required: true,
        unique: true
        },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'student'],
        default: 'student'
    }

})
userSchema.static.createUser = async function (userdata) {
    if (!userdata.name || !userdata.email || !userdata.password) {
        throw new Error('All fields are required');
    }
    const user = await this.create(userdata);
    if (!user) {
        throw new Error('Failed to create user');
    }
        if(!userdata.email || !userdata.password) {
        throw new Error('All fields must be filled');
    }
        if(!validator.isStrongPassword(userdata.password)){
    throw Error("password is not strong");
    }   
    return user;
}

const User = mongoose.model('User', userSchema)
module.exports = User