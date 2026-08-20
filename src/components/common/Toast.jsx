const Toast = ({ type, message, onClose }) => {
  if (!message) return null;

  return (
    <div className={`toast toast-${type}`} role="status" aria-live="polite">
      <span className="toast-icon">{type === "success" ? "✓" : "!"}</span>
      <span className="toast-message">{message}</span>
      <button type="button" onClick={onClose} aria-label="Close notification">
        ×
      </button>
    </div>
  );
};

export default Toast;
