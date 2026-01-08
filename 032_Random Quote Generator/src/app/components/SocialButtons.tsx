import { Twitter, Copy, Heart, Download, Share2 } from 'lucide-react'

interface SocialButtonsProps {
  quote: string
  author: string
}

export default function SocialButtons({ quote, author }: SocialButtonsProps) {
  const shareOnTwitter = () => {
    const text = `"${quote}" - ${author}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&hashtags=Inspiration,Quotes`;
    window.open(url, '_blank');
  };

  const copyToClipboard = () => {
    const text = `"${quote}" - ${author}`;
    navigator.clipboard.writeText(text);
    
    // Show temporary success message
    const button = document.getElementById('copy-button');
    if (button) {
      const original = button.innerHTML;
      button.innerHTML = '<span class="flex items-center"><Copy className="w-4 h-4 mr-2" />Copied!</span>';
      setTimeout(() => {
        button.innerHTML = original;
      }, 2000);
    }
  };

  const shareQuote = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Daily Inspiration',
        text: `"${quote}" - ${author}`,
        url: window.location.href,
      });
    } else {
      copyToClipboard();
    }
  };

  const downloadQuote = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1200;
    canvas.height = 630;

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(0.5, '#764ba2');
    gradient.addColorStop(1, '#f093fb');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add quote text
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    
    const lines = wrapText(ctx, `"${quote}"`, canvas.width * 0.1, canvas.width * 0.8, 48);
    lines.forEach((line, i) => {
      ctx.fillText(line, canvas.width / 2, 200 + i * 70);
    });

    // Add author
    ctx.font = 'italic 36px Arial';
    ctx.fillText(`— ${author}`, canvas.width / 2, canvas.height - 150);

    // Add watermark
    ctx.font = '24px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fillText('Daily Inspiration Generator', canvas.width / 2, canvas.height - 50);

    // Download image
    const link = document.createElement('a');
    link.download = `quote-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const wrapText = (ctx: CanvasRenderingContext2D, text: string, x: number, maxWidth: number, lineHeight: number) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      if (width < maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
      <button
        onClick={shareOnTwitter}
        className="glass-effect rounded-xl p-4 flex flex-col items-center justify-center space-y-2 group hover:bg-blue-500/20 transition-all duration-300 hover:scale-105"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Twitter className="w-6 h-6 text-white" />
        </div>
        <span className="text-sm font-medium text-white">Tweet</span>
      </button>

      <button
        id="copy-button"
        onClick={copyToClipboard}
        className="glass-effect rounded-xl p-4 flex flex-col items-center justify-center space-y-2 group hover:bg-green-500/20 transition-all duration-300 hover:scale-105"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Copy className="w-6 h-6 text-white" />
        </div>
        <span className="text-sm font-medium text-white">Copy</span>
      </button>

      <button
        onClick={downloadQuote}
        className="glass-effect rounded-xl p-4 flex flex-col items-center justify-center space-y-2 group hover:bg-purple-500/20 transition-all duration-300 hover:scale-105"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Download className="w-6 h-6 text-white" />
        </div>
        <span className="text-sm font-medium text-white">Download</span>
      </button>

      <button
        onClick={shareQuote}
        className="glass-effect rounded-xl p-4 flex flex-col items-center justify-center space-y-2 group hover:bg-pink-500/20 transition-all duration-300 hover:scale-105"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Share2 className="w-6 h-6 text-white" />
        </div>
        <span className="text-sm font-medium text-white">Share</span>
      </button>
    </div>
  )
}