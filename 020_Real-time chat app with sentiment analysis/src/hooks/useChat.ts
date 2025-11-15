'use client';

import { useState, useEffect, useCallback } from 'react';
import { Message, Sentiment } from '@/types/chat';
import { analyzeSentiment } from '@/utils/sentimentAnalysis';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  // Simulate real-time connection
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConnected(true);
      // Add a welcome message
      setMessages([
        {
          id: '1',
          content: 'Welcome to the chat! Start sending messages to see sentiment analysis in action.',
          sender: 'System',
          timestamp: new Date(),
          sentiment: 'neutral'
        }
      ]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const sendMessage = useCallback(() => {
    if (!currentMessage.trim()) return;

    const sentimentResult = analyzeSentiment(currentMessage);
    
    const newMessage: Message = {
      id: Date.now().toString(),
      content: currentMessage.trim(),
      sender: 'You',
      timestamp: new Date(),
      sentiment: sentimentResult.sentiment
    };

    setMessages(prev => [...prev, newMessage]);
    setCurrentMessage('');

    // Simulate response after a short delay
    setTimeout(() => {
      const responses = [
        "Thanks for your message!",
        "I understand what you're saying.",
        "That's interesting!",
        "Tell me more about that.",
        "I see what you mean."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const responseSentiment = analyzeSentiment(randomResponse);
      
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender: 'Bot',
        timestamp: new Date(),
        sentiment: responseSentiment.sentiment
      };

      setMessages(prev => [...prev, responseMessage]);
    }, 1000 + Math.random() * 2000);
  }, [currentMessage]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }, [sendMessage]);

  return {
    messages,
    currentMessage,
    setCurrentMessage,
    sendMessage,
    handleKeyPress,
    isConnected
  };
}