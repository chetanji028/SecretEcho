const Message = require("../models/Message");

exports.sendMessage = async (req, res, next) => {
  try {
    const { content } = req.body;
    const message = new Message({
      content,
      sender: req.user.email,
      timestamp: new Date(),
    });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    next(err);
  }
};

exports.getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    next(err);
  }
};