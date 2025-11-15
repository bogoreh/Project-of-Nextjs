interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  disabled?: boolean;
}

export default function MessageInput({
  value,
  onChange,
  onSend,
  onKeyPress,
  disabled = false,
}: MessageInputProps) {
  return (
    <div className="input-container">
      <textarea
        className="message-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={onKeyPress}
        placeholder="Type your message here..."
        rows={3}
        disabled={disabled}
      />
      <button
        className="send-button"
        onClick={onSend}
        disabled={disabled || !value.trim()}
      >
        Send Message
      </button>
    </div>
  );
}