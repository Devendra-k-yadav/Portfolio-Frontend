import { Send } from "lucide-react";

const ChatInput = ({
  value,
  onChange,
  onSend,
  loading,
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      if (!loading) {
        onSend();
      }
    }
  };

  return (
    <div className="chat-input-wrapper">
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask me about Devendra..."
        rows={1}
        maxLength={1000}
        disabled={loading}
      />

      <button
        type="button"
        onClick={onSend}
        disabled={!value.trim() || loading}
        aria-label="Send message"
      >
        <Send size={18} />
      </button>
    </div>
  );
};

export default ChatInput;