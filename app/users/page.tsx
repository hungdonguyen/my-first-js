// Lưu ý: Đây là Server Component mặc định (không có "use client")
import Link from 'next/link';
import Image from "next/image";
// 1. Định nghĩa kiểu dữ liệu (TypeScript)
interface User {
  id: number;
  name: string;
  email: string;
}

export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Danh sách người dùng</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow hover:bg-black-100 transition">
            <h2 className="font-bold text-lg">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            {/* 2. Thêm ảnh Avatar ở đây */}
              <Image 
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                width={80}  // Bắt buộc phải khai báo kích thước
                height={80} // để Next.js giữ chỗ layout
                className="rounded-full bg-gray-200"
              />
            <Link href={`/users/${user.id}`} className="text-blue-500 hover:underline">
              Xem chi tiết &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}