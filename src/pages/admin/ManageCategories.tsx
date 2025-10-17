import { useState } from "react";

export default function ManageCategories() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Công nghệ" },
    { id: 2, name: "Giải trí" },
    { id: 3, name: "Khoa học" },
  ]);

  const [newCategory, setNewCategory] = useState("");

  const handleAdd = () => {
    if (!newCategory.trim()) return;
    setCategories([
      ...categories,
      { id: Date.now(), name: newCategory.trim() },
    ]);
    setNewCategory("");
  };

  const handleDelete = (id: number) => {
    setCategories(categories.filter((c) => c.id !== id));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">📂 Quản lý chủ đề bài viết</h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Nhập tên chủ đề..."
            className="border rounded px-3 py-2 flex-1"
          />
          <button
            onClick={handleAdd}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Thêm
          </button>
        </div>

        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2 text-left">Tên chủ đề</th>
              <th className="border px-4 py-2">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c, index) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2">{c.name}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(c.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
