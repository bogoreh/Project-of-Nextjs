'use client';

import React, { useState, KeyboardEvent } from 'react';
import { Input } from '../UI/Input';
import { Button } from '../UI/Button';
import { ValidationError } from './types';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isTyping: boolean;
  errors: ValidationError[];
}

export const MessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  isTyping,
  errors,
}) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && !isTyping) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const getErrorForField = (field: string) => {
    return errors.find(e => e.field === field)?.message;
  };

  return (
    <div className="border-t bg-white p-4">
      {errors.length > 0 && (
        <div className="mb-2 space-y-1">
          {errors.map((error, index) => (
            <p key={index} className="text-sm text-red-500 animate-fadeIn">
              {error.message}
            </p>
          ))}
        </div>
      )}
      
      <div className="flex space-x-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          disabled={isTyping}
          error={getErrorForField('message')}
          maxLength={500}
          className="flex-1"
        />
        
        <Button
          onClick={handleSend}
          disabled={!message.trim() || isTyping}
          isLoading={isTyping}
          className="px-6"
        >
          Send
        </Button>
      </div>
      
      <p className="text-xs text-gray-400 mt-2 text-center">
        Press Enter to send • Max 500 characters
      </p>
    </div>
  );
};