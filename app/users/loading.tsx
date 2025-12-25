export default function Loading() {
  return (
    
    <div className="p-10 text-center">
      {/* Hiệu ứng xoay xoay đơn giản với Tailwind */}
      <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-2 text-gray-500">Đang tải danh sách...</p>
    </div>
  );
}