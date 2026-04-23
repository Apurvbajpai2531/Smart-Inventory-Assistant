const axios = require('axios');

exports.askAI = async (prompt) => {
  const res = await axios.post("http://ollama:11434/api/generate", {
    model: "llama3",
    prompt: prompt,
    stream: false
  });

  return res.data.response;
};
