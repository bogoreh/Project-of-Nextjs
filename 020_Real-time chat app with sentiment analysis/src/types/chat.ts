export interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: Date;
  sentiment?: Sentiment;
}

export type Sentiment = 'positive' | 'negative' | 'neutral';

export interface SentimentResult {
  sentiment: Sentiment;
  score: number;
}