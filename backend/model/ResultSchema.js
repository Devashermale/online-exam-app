const mongoose = require("mongoose");

const resultSchema = mongoose.Schema({
    result_id: {
        type: String,
        unique: true,
        default: Math.floor(100000 + Math.random() * 900000).toString()
    },
    user_id: {
        type: String
        },
    exam_id: {
        type: String,
        required: true,
     default: Math.floor(100000 + Math.random() * 900000).toString()

    },
    score: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        customDate:Date 
    },
    status: {
        type: String,
        enum: ['passed', 'failed'],
        required: true
    },
    answers: [{
        question: { 
            type: String,
            required: true
        },
        selectedOption: {
            type: String,   
            required: true
        },
        correctOption: {
            type: String,
            required: true
        }
    }]
}); 
resultSchema.static.createResult = async function (resultData) {
    if (!resultData.user_id || !resultData.exam_id || !resultData.score || !resultData.status || !resultData.answers) {
        throw new Error('All fields are required');
    }
    const result = await this.create(resultData);
    if (!result) {
        throw new Error('Failed to create result');
    }
    if (result.score >= 30) {
        result.status = 'passed';
    }
        else {
        result.status = 'failed';
    }

    if(!email ){
        throw new Error('Email is required');
    }
    return result;
}

const Result = mongoose.model('Result', resultSchema);
module.exports = Result;