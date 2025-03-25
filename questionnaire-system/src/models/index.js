// src/models/index.js

const mongoose = require('mongoose');

const questionnaireSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    questions: [
        {
            questionText: {
                type: String,
                required: true
            },
            questionType: {
                type: String,
                enum: ['multiple_choice', 'open_ended', 'scale'],
                required: true
            },
            options: [String] // For multiple choice questions
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);

module.exports = {
    Questionnaire
};