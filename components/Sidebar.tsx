export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-gradient-to-b from-green-800 to-green-900 text-white p-6 flex flex-col shadow-2xl">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-3xl">🌿</span>
          <span className="bg-gradient-to-r from-green-300 to-emerald-200 bg-clip-text text-transparent">
            EnviManager
          </span>
        </h2>
        <p className="text-xs text-green-300 mt-1">Quản lý môi trường thông minh</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-3">
          <li className="group">
            <div className="p-3 bg-green-700 rounded-lg cursor-pointer shadow-md transform transition-all duration-200 hover:scale-105 hover:bg-green-600">
              <div className="flex items-center gap-3">
                <span className="text-xl">📊</span>
                <span className="font-medium">Tổng quan</span>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="p-3 hover:bg-green-700 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="text-xl">📡</span>
                <span className="font-medium">Thiết bị đo</span>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="p-3 hover:bg-green-700 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="text-xl">📈</span>
                <span className="font-medium">Báo cáo</span>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="p-3 hover:bg-green-700 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="text-xl">⚙️</span>
                <span className="font-medium">Cài đặt</span>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-green-700">
        <div className="flex items-center justify-between text-sm text-green-300">
          <span>Version</span>
          <span className="font-semibold">v1.0.0</span>
        </div>
      </div>
    </aside>
  );
}
