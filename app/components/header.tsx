// components/header.tsx
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <Link href="/" legacyBehavior>
            <a className="text-2xl font-bold">KogCoder</a>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" legacyBehavior>
                <a className="hover:underline">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/blog" legacyBehavior>
                <a className="hover:underline">Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;