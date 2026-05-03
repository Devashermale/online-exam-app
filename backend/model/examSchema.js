const mongoose = require("mongoose");
 const bcrypt = require('bcryptjs');
 const validator = require('validator');

const examSchema = mongoose.Schema({
    user_id: {
        type: String,
    
    },
    exam_id: {
        unique: true,
        default:Math.random().toString(36).substr(2, 9),
        type: String,
        required: true,
       ref: 'User'
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
    }],
    score:{
        type:String,
    },
    status:{
        type:String,

    }
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

   

return exam
}

const Exam = mongoose.model('Exam', examSchema);
module.exports = Exam;