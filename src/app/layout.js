import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-background text-foreground">
      <body className="min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}