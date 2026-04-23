const axios = require('axios');

exports.askAI = async (prompt) => {
  const response = await axios.post(
      `${process.env.OLLAMA_URL || 'http://ollama:11434'}/api/generate`,
    {
      model: process.env.OLLAMA_MODEL || 'llama3',
      prompt,
      stream: false
    }
  );

  return response.data.response;
};






 
