import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới thiệu về chúng tôi",
  description: "Trang web demo học Next.js từ con số 0",
};

export default function AboutPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-green-600">Trang Giới Thiệu</h1>
      <p className="mt-4">Chúng tôi là những lập trình viên Next.js tương lai!</p>
    </div>
  );
}