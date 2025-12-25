import type { Metadata } from "next";

// 1. Định nghĩa lại Type (cho gọn)
type Props = {
  params: Promise<{ id: string }>;
};

// 2. Hàm sinh Metadata động
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Vì params là Promise (Next.js 15), phải await nó
  const { id } = await params;

  // Fetch dữ liệu nhẹ để lấy tên (Next.js sẽ tự cache, không sợ gọi 2 lần đâu)
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    title: `${user.name} | Thông tin chi tiết`,
    description: `Xem hồ sơ đầy đủ của ${user.name} tại website của chúng tôi.`,
  };
}

// ... (Hàm UserDetailPage cũ giữ nguyên ở dưới)
export default async function UserDetailPage({ params }: Props) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      {/* CARD GIAO DIỆN CHÍNH */}
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-[1.01] duration-300">
        {/* Phần Header màu sắc (Cover Image giả lập) */}
        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>

        <div className="px-8 pb-8">
          {/* Avatar nằm đè lên Header (Negative Margin) */}
          <div className="relative -mt-16 mb-4">
            <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden bg-gray-200">
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=200x200`}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Thông tin chính - Phân cấp thị giác rõ ràng */}
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">
            {user.name}
          </h1>
          <p className="text-sm font-medium text-blue-500 mb-6 uppercase tracking-wider">
            Member ID: #{id}
          </p>

          {/* Grid thông tin chi tiết */}
          <div className="space-y-4">
            <InfoRow label="Email" value={user.email} icon="📧" />
            <InfoRow label="Phone" value={user.phone} icon="📞" />
            <InfoRow label="Website" value={user.website} icon="🌐" />
          </div>

          {/* Nút bấm (Call to Action) */}
          <a
            href="/users"
            className="mt-8 block w-full py-3 px-6 text-center rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:opacity-90 transition shadow-lg"
          >
            &larr; Quay lại danh sách
          </a>
        </div>
      </div>
    </div>
  );
}

// Component nhỏ để tái sử dụng (DRY - Don't Repeat Yourself)
function InfoRow({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: string;
}) {
  return (
    <div className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
      <span className="text-2xl mr-4">{icon}</span>
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">
          {label}
        </p>
        <p className="text-gray-800 dark:text-gray-200 font-medium">{value}</p>
      </div>
    </div>
  );
}
