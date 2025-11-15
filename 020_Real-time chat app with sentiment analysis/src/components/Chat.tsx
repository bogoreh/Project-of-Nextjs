'use client';

import { useChat } from '@/hooks/useChat';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

export default function Chat() {
  const {
    messages,
    currentMessage,
    setCurrentMessage,
    sendMessage,
    handleKeyPress,
    isConnected
  } = useChat();

  return (
    <div className="container">
      <div className="chat-container">
        <div className="chat-header">
          <h1>Real-time Chat</h1>
          <p>With Sentiment Analysis</p>
          <div className="connection-status">
            Status: {isConnected ? '🟢 Connected' : '🟡 Connecting...'}
          </div>
        </div>
        
        <MessageList messages={messages} />
        
        <MessageInput
          value={currentMessage}
          onChange={setCurrentMessage}
          onSend={sendMessage}
          onKeyPress={handleKeyPress}
          disabled={!isConnected}
        />
      </div>
    </div>
  );
}