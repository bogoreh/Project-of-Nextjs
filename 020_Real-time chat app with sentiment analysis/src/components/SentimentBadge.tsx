import { Sentiment } from '@/types/chat';

interface SentimentBadgeProps {
  sentiment: Sentiment;
}

export default function SentimentBadge({ sentiment }: SentimentBadgeProps) {
  const getSentimentClass = (sentiment: Sentiment) => {
    switch (sentiment) {
      case 'positive':
        return 'sentiment-badge sentiment-positive';
      case 'negative':
        return 'sentiment-badge sentiment-negative';
      default:
        return 'sentiment-badge sentiment-neutral';
    }
  };

  const getSentimentEmoji = (sentiment: Sentiment) => {
    switch (sentiment) {
      case 'positive':
        return '😊';
      case 'negative':
        return '😞';
      default:
        return '😐';
    }
  };

  return (
    <span className={getSentimentClass(sentiment)}>
      {sentiment} {getSentimentEmoji(sentiment)}
    </span>
  );
}