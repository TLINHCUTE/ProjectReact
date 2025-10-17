import { useState } from "react";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  image: string;
  title: string;
  category: string;
  content: string;
  status: "Public" | "Private";
}

const dummyPosts: Post[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1604908177225-6d7a5a99d3f7",
    title: "Học nấu cá sốt cà chua",
    category: "Nấu ăn",
    content: "Tôi đã học được cách nấu ăn rất ngon...",
    status: "Public",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    title: "Bí kíp viết CV ngành IT",
    category: "IT",
    content: "Chia sẻ cách viết CV ấn tượng...",
    status: "Private",
  },
];

export default function AdminPostList() {
  const [posts, setPosts] = useState(dummyPosts);

  const handleDelete = (id: number) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const handleStatusChange = (id: number, status: "Public" | "Private") => {
    setPosts(posts.map((p) => (p.id === id ? { ...p, status } : p)));
  };

  return (
    <div className="flex-1 p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Quản lý bài viết</h2>
        <Link
          to="/admin/add-post"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Thêm mới bài viết
        </Link>
      </div>

      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="border-b bg-gray-100 text-left text-gray-700">
            <th className="p-3">Ảnh</th>
            <th className="p-3">Tiêu đề</th>
            <th className="p-3">Chủ đề</th>
            <th className="p-3">Nội dung</th>
            <th className="p-3">Trạng thái</th>
            <th className="p-3">Chỉnh sửa trạng thái</th>
            <th className="p-3">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-b hover:bg-gray-50">
              <td className="p-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              </td>
              <td className="p-3 font-medium">{post.title}</td>
              <td className="p-3">{post.category}</td>
              <td className="p-3 truncate max-w-[200px]">{post.content}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    post.status === "Public"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {post.status}
                </span>
              </td>
              <td className="p-3">
                <select
                  value={post.status}
                  onChange={(e) =>
                    handleStatusChange(post.id, e.target.value as "Public" | "Private")
                  }
                  className="border rounded px-2 py-1"
                >
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </select>
              </td>
              <td className="p-3 space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                  Sửa
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Phân trang */}
      <div className="flex justify-center items-center mt-4 gap-2">
        <button className="border px-3 py-1 rounded-lg hover:bg-gray-100">Previous</button>
        <button className="border px-3 py-1 rounded-lg bg-blue-500 text-white">1</button>
        <button className="border px-3 py-1 rounded-lg hover:bg-gray-100">2</button>
        <button className="border px-3 py-1 rounded-lg hover:bg-gray-100">Next</button>
      </div>
    </div>
  );
}
