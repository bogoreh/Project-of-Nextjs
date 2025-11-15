import { Message } from '@/types/chat';
import SentimentBadge from './SentimentBadge';

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="messages-container">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.sender === 'You' ? 'user' : 'other'}`}
        >
          <div className="message-sender">
            {message.sender}
            {message.sentiment && <SentimentBadge sentiment={message.sentiment} />}
          </div>
          <div className="message-content">{message.content}</div>
          <div className="message-time">
            {message.timestamp.toLocaleTimeString()}
          </div>
        </div>
      ))}
    </div>
  );
}