const responses = [
    "That's interesting! Tell me more.",
    "Hmm, let me think about that...",
    "Cool, what's next?",
    "I see, what's your take on this?",
    "Nice one! Got any questions?",
  ];
  
  exports.generateAIResponse = (userMessage) => {
    return responses[Math.floor(Math.random() * responses.length)];
  };