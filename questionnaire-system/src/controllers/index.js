const { Questionnaire } = require('../models/index.js');

class IndexController {
    constructor() {
        // Initialize any required properties or services here
    }

    async createQuestionnaire(req, res) {
        try {
            const newQuestionnaire = new Questionnaire(req.body);
            await newQuestionnaire.save();
            res.status(201).json(newQuestionnaire);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async editQuestionnaire(req, res) {
        try {
            const updatedQuestionnaire = await Questionnaire.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedQuestionnaire) {
                return res.status(404).json({ message: 'Questionário não encontrado' });
            }
            res.json(updatedQuestionnaire);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async listQuestionnaires(req, res) {
        try {
            const questionnaires = await Questionnaire.find();
            res.json(questionnaires);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = IndexController;