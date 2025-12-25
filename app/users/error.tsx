"use client"; // Bắt buộc

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  
  useEffect(() => {
    // Log lỗi ra console để dev xem
    console.error(error);
  }, [error]);

  return (
    <div className="p-10 text-center text-red-600">
      <h2 className="text-2xl font-bold">Ôi hỏng rồi! 😭</h2>
      <p className="mb-4">Không thể tải danh sách người dùng.</p>
      
      {/* Nút reset giúp thử gọi lại API lần nữa */}
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Thử lại
      </button>
    </div>
  );
}