import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 font-sans">
        <header className="bg-blue-600 text-white p-4 shadow-lg">
          <nav className="container mx-auto flex justify-between">
            <a href="/" className="text-lg font-semibold hover:text-blue-200">Home</a>
            <a href="/about" className="text-lg font-semibold hover:text-blue-200">Sobre</a>
          </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="text-center bg-blue-600 text-white p-4">
          <p>© 2024 - TCC BRUNO - SSR. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}

