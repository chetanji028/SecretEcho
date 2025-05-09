import { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";
import Message from "./Message";

const socket = io("http://localhost:5000");

const ChatWindow = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch chat history
    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/messages", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setMessages(res.data);
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };
    fetchMessages();

    // Socket.io: Listen for new messages
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
      setLoading(false);
    });

    return () => socket.off("message");
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      content: newMessage,
      sender: user.email,
      timestamp: new Date(),
    };

    try {
      setLoading(true);
      await axios.post(
        "http://localhost:5000/api/messages",
        { content: newMessage },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setMessages((prev) => [...prev, message]);
      setNewMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      setLoading(false);
    }
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} isUser={msg.sender === user.email} />
        ))}
        {loading && <p className="loading">AI is typing...</p>}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
      <style jsx>{`
        .chat-window {
          max-width: 600px;
          margin: 20px auto;
          border: 1px solid #ccc;
          padding: 20px;
        }
        .messages {
          max-height: 400px;
          overflow-y: auto;
          margin-bottom: 20px;
        }
        .loading {
          color: #888;
          text-align: center;
        }
        form {
          display: flex;
        }
        input {
          flex: 1;
          padding: 10px;
          border: 1px solid #ccc;
        }
        button {
          padding: 10px 20px;
          background: #0070f3;
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ChatWindow;