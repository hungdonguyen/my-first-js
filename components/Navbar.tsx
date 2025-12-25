"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
    const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/users', label: 'Users' },
  ];
  return (
    <nav className="p-4 bg-gray-800 text-white flex gap-4 items-center justify-between shadow-md sticky top-0 z-50">
      <div className="font-bold text-xl">My App</div>
      <div className="flex gap-4">
        {links.map((link) => {
          // 4. Kiểm tra xem link này có đang active không
          // Logic: Nếu pathname trùng với href, hoặc pathname bắt đầu bằng href (trừ trang chủ /)
          const isActive = link.href === '/' 
            ? pathname === '/' 
            : pathname.startsWith(link.href);

          return (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`${
                isActive ? 'text-blue-400 font-bold' : 'text-gray-300 hover:text-white'
              } transition-colors duration-200`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
