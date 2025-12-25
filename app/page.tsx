import Link from 'next/link'
import Counter from '@/components/Counter';

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-blue-600">Xin chào Next.js!</h1>
      <p className="mt-4 text-xl">Đây là trang web đầu tiên của tôi.</p>

      {/* Nút chuyển trang */}
      <Link href="/about" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
        Về chúng tôi
      </Link>
      <Link href="/users" className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition">
        Danh sách người dùng
      </Link>
      <Counter />
    </div>
  )
}