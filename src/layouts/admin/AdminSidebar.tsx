interface Props {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

export default function AdminSidebar({ setActiveTab, activeTab }: Props) {
  const menuItems = [
    { key: "users", label: "👤 Quản lý người dùng" },
    { key: "posts", label: "📝 Quản lý bài viết" },
    { key: "articles", label: "📚 Danh sách chủ đề" },
    { key: "addpost", label: "➕ Thêm bài viết mới" },
  ];

  return (
    <aside className="w-64 bg-white border-r shadow-sm">
      <div className="p-4 border-b font-semibold text-lg text-center text-gray-700">
        Admin Dashboard
      </div>
      <ul className="space-y-1 p-4">
        {menuItems.map((item) => (
          <li key={item.key}>
            <button
              onClick={() => setActiveTab(item.key)}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                activeTab === item.key
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-100"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
