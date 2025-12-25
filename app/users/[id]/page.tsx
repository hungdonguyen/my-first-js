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
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-4">Thông tin chi tiết người dùng</h1>
            <div className="p-6 border rounded shadow">
                <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
                <p className="mb-1"><strong>Email:</strong> {user.email}</p>
                <p className="mb-1"><strong>Điện thoại:</strong> {user.phone}</p>
                <p className="mb-1"><strong>Địa chỉ:</strong> {user.address.street}, {user.address.city}</p>
                <p className="mb-1"><strong>Công ty:</strong> {user.company.name}</p>
            </div>
        </div>
    );
}