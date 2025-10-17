import { LogOut, FileText, Users, BookOpen } from "lucide-react";

export default function Sidebar() {
  const menus = [
    { icon: <Users />, label: "Manage Users" },
    { icon: <FileText />, label: "Manage Entries" },
    { icon: <BookOpen />, label: "Manage Article" },
    { icon: <LogOut />, label: "Log out" },
  ];

  return (
    <aside className="w-56 bg-white border-r h-screen p-4 flex flex-col gap-3">
      {menus.map((item, i) => (
        <button
          key={i}
          className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium py-2 px-3 rounded-lg shadow-sm transition-all"
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </aside>
  );
}
