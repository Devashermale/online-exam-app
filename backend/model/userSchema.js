const mongoose =require('mongoose')
const bcrypt = require('bcryptjs'); // Ensure this is at the top
const validator = require('validator');
const userSchema = mongoose.Schema({
    name: { 
        type: String,
        required: true
     },
    email: {
        type: String,
        required:true
        },
    password: {
        type: String,
        required:true
    },
    role: {
        type: String,
        enum: ['admin', 'student'],
        default: 'student'
    }

})

userSchema.statics.createUser = async function (userdata) {
    const { email, password, role ,name } = userdata;
    
    if (!email || !password || !role || !name) {
        throw Error('All fields must be filled');
    }

    // 2. HASHING (The Missing Step)
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // 3. Save the HASH, not the plain password
    const user = await this.create({
        ...userdata,
        password: hash // Replace plain text with the hash
    });

    return user;
}
userSchema.statics.Login = async function (userdata) {
    const { email, password } = userdata; // Ensure password is pulled out here
    
    const user = await this.findOne({ email });
    if(!user) throw Error('Incorrect Email!');

    // LOG THESE TO DEbug:

    const match = await bcrypt.compare(password, user.password);
    if(!match) throw Error('Incorrect password');
    
    return user;
}
const User = mongoose.model('User', userSchema);
module.exports = User