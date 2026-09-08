const ChatMessage = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div
      className={`chat-message ${
        isUser
          ? "chat-message-user"
          : "chat-message-assistant"
      }`}
    >
      <div className="chat-avatar">
        {isUser ? "You" : "AI"}
      </div>

      <div className="chat-message-content">
        {message.isStreaming && !message.content ? (
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          message.content
        )}
      </div>
    </div>
  );
};

export default ChatMessage;