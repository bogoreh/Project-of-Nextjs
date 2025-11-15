import { Sentiment, SentimentResult } from '@/types/chat';

// Simple sentiment analysis based on keyword matching
// In a real app, you'd use a proper NLP library like compromise or AFINN
export function analyzeSentiment(text: string): SentimentResult {
  const positiveWords = [
    'happy', 'good', 'great', 'awesome', 'excellent', 'fantastic', 'amazing',
    'wonderful', 'love', 'like', 'nice', 'cool', 'perfect', 'brilliant',
    'fantastic', 'super', 'yes', 'yeah', 'yay', 'woohoo'
  ];

  const negativeWords = [
    'sad', 'bad', 'terrible', 'awful', 'horrible', 'hate', 'dislike',
    'angry', 'mad', 'upset', 'frustrated', 'annoying', 'no', 'nope',
    'not', "don't", "can't", "won't", 'ugh', 'boring'
  ];

  const words = text.toLowerCase().split(/\s+/);
  let positiveCount = 0;
  let negativeCount = 0;

  words.forEach(word => {
    if (positiveWords.includes(word)) positiveCount++;
    if (negativeWords.includes(word)) negativeCount++;
  });

  const total = positiveCount + negativeCount;
  
  if (total === 0) {
    return { sentiment: 'neutral', score: 0 };
  }

  const score = (positiveCount - negativeCount) / total;

  if (score > 0.1) {
    return { sentiment: 'positive', score };
  } else if (score < -0.1) {
    return { sentiment: 'negative', score };
  } else {
    return { sentiment: 'neutral', score };
  }
}