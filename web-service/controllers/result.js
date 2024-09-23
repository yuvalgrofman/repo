const resultService = require('../services/result');

const updateResult = async (req, res) => {
    const { testId, soldierId, score } = req.body;

    try {
        const result = await resultService.updateScore(testId, soldierId, score);
        return res.send(result);
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

const getResult = async (req, res) => {
    const { testName, soldierId } = req.body;

    try {
        const result = await resultService.getResult(testName, soldierId);
        return res.send(result);
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

module.exports = { getResult, updateResult };