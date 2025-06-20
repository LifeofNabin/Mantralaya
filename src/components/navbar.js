import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          StartupName
        </Link>
        <div className="flex space-x-8">
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/work" className="hover:text-blue-600">Work</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}