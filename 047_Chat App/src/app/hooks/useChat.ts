'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { Message, ValidationError } from '../components/Chat/types';

const MESSAGE_LIMIT = 500;
const RATE_LIMIT_MS = 1000; // 1 second between messages

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const lastMessageTime = useRef<number>(0);

  const validateMessage = (text: string): ValidationError[] => {
    const errors: ValidationError[] = [];

    if (!text.trim()) {
      errors.push({
        field: 'message',
        message: 'Message cannot be empty',
      });
    } else if (text.length > MESSAGE_LIMIT) {
      errors.push({
        field: 'message',
        message: `Message cannot exceed ${MESSAGE_LIMIT} characters`,
      });
    }

    // Rate limiting check
    const now = Date.now();
    if (now - lastMessageTime.current < RATE_LIMIT_MS) {
      errors.push({
        field: 'rate',
        message: 'Please wait before sending another message',
      });
    }

    // Profanity check (basic example)
    const profanityList = ['badword1', 'badword2'];
    if (profanityList.some(word => text.toLowerCase().includes(word))) {
      errors.push({
        field: 'content',
        message: 'Please keep the conversation respectful',
      });
    }

    return errors;
  };

  const sendMessage = useCallback(async (text: string) => {
    // Validate message
    const validationErrors = validateMessage(text);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setTimeout(() => setErrors([]), 3000);
      return;
    }

    setErrors([]);
    lastMessageTime.current = Date.now();

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(text),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  }, []);

  const getBotResponse = (userMessage: string): string => {
    const responses = [
      "That's interesting! Tell me more.",
      "I understand. How does that make you feel?",
      "Thanks for sharing that with me.",
      "Great point! What else would you like to discuss?",
      "I'm here to listen. Please continue.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return {
    messages,
    isTyping,
    errors,
    sendMessage,
  };
};