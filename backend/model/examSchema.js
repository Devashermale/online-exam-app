const mongoose = require("mongoose");
 const bcrypt = require('bcryptjs');
 const validator = require('validator');

const examSchema = mongoose.Schema({
    user_id: {
        type: String,
    
    },
    exam_id: {
        type: String,
        unique: true,
        default: Math.floor(100000 + Math.random() * 900000).toString()
    },
    title: {
        type: String,
        required: true
    },  
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
         customDate: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    questions: [{
        question: { 
            type: String,
            required: true
        },
        options: [{
            type: String,
            required: true
        }],
        answer: {
            type: String,
            required: true
        }
    }]
},
{
    timestamps: true
});
examSchema.static.creteExam = async function (examdata)
{
    if (!examdata.title || !examdata.description || !examdata.date || !examdata.duration || !examdata.questions) {
        throw new Error('All fields are required');
    }

        const exam = await this.create(examdata);

     if(!email || !password) {
        throw new Error('All fields must be filled');
    }
     if(!validator.isStrongPassword(password)){
    throw Error("password is not strong"); 
}
if(!validator.isEmail(email)){
    throw Error("email is not valid");
}
if (await this.findOne({ email })) {
    throw new Error('Email already in use');
}

if(exam){
throw Error('email already exits')

}

return exam
}

const Exam = mongoose.model('Exam', examSchema);
module.exports = Exam;