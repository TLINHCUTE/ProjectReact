import { useState } from "react";

export default function ManagePosts() {
  const [posts] = useState([
    { id: 1, title: "Công nghệ 4.0", category: "Công nghệ", status: "Public" },
    { id: 2, title: "Giải trí cuối tuần", category: "Giải trí", status: "Private" },
    { id: 3, title: "Phát minh mới", category: "Khoa học", status: "Public" },
  ]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">📰 Quản lý danh sách bài viết</h2>

        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2 text-left">Tiêu đề</th>
              <th className="border px-4 py-2 text-left">Chủ đề</th>
              <th className="border px-4 py-2">Trạng thái</th>
              <th className="border px-4 py-2">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p, index) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2">{p.title}</td>
                <td className="border px-4 py-2">{p.category}</td>
                <td className="border px-4 py-2 text-center">{p.status}</td>
                <td className="border px-4 py-2 text-center">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2">
                    Sửa
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
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
