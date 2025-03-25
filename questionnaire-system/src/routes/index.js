const express = require('express');
const IndexController = require('../controllers/index.js');

const router = express.Router();
const indexController = new IndexController();

router.post('/questionnaires', indexController.createQuestionnaire);
router.get('/questionnaires', indexController.listQuestionnaires);
router.put('/questionnaires/:id', indexController.editQuestionnaire);
// router.delete('/questionnaires/:id', indexController.deleteQuestionnaire);

module.exports = router;