'use client';

import React from 'react';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { useChat } from '@/app/hooks/useChat';

export const ChatContainer = () => {
  const { messages, isTyping, errors, sendMessage } = useChat();

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold">🤖</span>
        </div>
        <div>
          <h2 className="font-semibold text-gray-800">Chat Assistant</h2>
          <p className="text-xs text-gray-500">
            {isTyping ? 'Typing...' : 'Online'}
          </p>
        </div>
      </div>

      {/* Messages */}
      <MessageList messages={messages} isTyping={isTyping} />

      {/* Input */}
      <MessageInput
        onSendMessage={sendMessage}
        isTyping={isTyping}
        errors={errors}
      />
    </div>
  );
};