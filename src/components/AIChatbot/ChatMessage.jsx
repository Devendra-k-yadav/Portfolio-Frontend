
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
          <div
            className="typing-indicator"
            aria-label="AI is typing"
          >
            <span />
            <span />
            <span />
          </div>
        ) : isUser ? (
          <div className="chat-user-text">
            {message.content}
          </div>
        ) : (
          <div className="chat-markdown">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {message.content || ""}
            </ReactMarkdown>

            {message.isStreaming && (
              <span className="streaming-cursor" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;