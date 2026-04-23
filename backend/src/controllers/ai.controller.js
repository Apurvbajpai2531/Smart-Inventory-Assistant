const aiService = require('../services/ai.service');

exports.ask = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'question is required' });
    }

    const answer = await aiService.askAI(question);
    res.json({ answer });
  } catch (error) {
    console.error('AI controller error:', error.message);
    res.status(500).json({ error: 'Failed to get AI response' });
  }
};
