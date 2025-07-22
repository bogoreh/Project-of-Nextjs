import './globals.css';

export const metadata = {
  title: 'Country Rankings',
  description: 'Sort and view country rankings by various metrics',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}