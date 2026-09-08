import { Bot, X } from "lucide-react";

const ChatHeader = ({ onClose }) => {
  return (
    <div className="chat-header">
      <div className="chat-header-info">
        <div className="chat-bot-icon">
          <Bot size={20} />
        </div>

        <div>
          <h3>Devendra's AI</h3>
          <span>
            <span className="online-dot"></span>
            Online
          </span>
        </div>
      </div>

      <button
        type="button"
        className="chat-close-btn"
        onClick={onClose}
        aria-label="Close chatbot"
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default ChatHeader;