const aiService = require('../services/ai.service');

exports.ask = async (req, res) => {
  const { question } = req.body;

  const answer = await aiService.askAI(question);

  res.json({ answer });
};
