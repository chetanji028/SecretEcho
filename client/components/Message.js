const Message = ({ message, isUser }) => (
    <div className={`message ${isUser ? "user" : "ai"}`}>
      <p>{message.content}</p>
      <span>{new Date(message.timestamp).toLocaleTimeString()}</span>
      <style jsx>{`
        .message {
          margin: 10px;
          padding: 10px;
          border-radius: 8px;
          max-width: 70%;
        }
        .user {
          background: #0070f3;
          color: white;
          margin-left: auto;
          text-align: right;
        }
        .ai {
          background: #f0f0f0;
          margin-right: auto;
        }
        span {
          font-size: 0.8em;
          color: #666;
        }
      `}</style>
    </div>
  );
  
  export default Message;