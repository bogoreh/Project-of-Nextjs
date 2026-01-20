import ColorPicker from '@/components/ColorPicker';

export default function Home() {
  return (
    <main className="main-container">
      <header className="header">
        <h1 className="title">🎨 Color Picker</h1>
        <p className="subtitle">Pick, customize, and copy colors for your projects</p>
      </header>
      
      <div className="content-wrapper">
        <ColorPicker />
      </div>
      
      <footer className="footer">
        <p>Mobile-friendly Color Picker • Built with Next.js & TypeScript</p>
      </footer>
    </main>
  );
}