import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  category: string;
  content: string;
  image: string;
  status: string;
  date: string;
}

export default function ArticleList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filter, setFilter] = useState("Tất cả");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("posts") || "[]");
    setPosts(data);
  }, []);

  // Lọc nếu người dùng chọn chủ đề cụ thể
  const filtered =
    filter === "Tất cả"
      ? posts
      : posts.filter((p) => p.category === filter);

  // Gom nhóm theo chủ đề
  const grouped = filtered.reduce((acc: Record<string, Post[]>, post) => {
    if (!acc[post.category]) acc[post.category] = [];
    acc[post.category].push(post);
    return acc;
  }, {});

  const categories = ["Tất cả", ...new Set(posts.map((p) => p.category))];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">📚 Danh sách bài viết</h2>
          <Link
            to="/admin/add-post"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            ➕ Thêm bài viết
          </Link>
        </div>

        {/* Bộ lọc chủ đề */}
        <div className="flex gap-3 mb-6 items-center">
          <label className="font-medium">Lọc theo chủ đề:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded px-3 py-1"
          >
            {categories.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Hiển thị nhóm bài viết theo chủ đề */}
        {Object.keys(grouped).length === 0 ? (
          <p className="text-gray-500 text-center py-10">
            🚫 Chưa có bài viết nào.
          </p>
        ) : (
          Object.keys(grouped).map((cat) => (
            <div key={cat} className="mb-8">
              <h3 className="text-xl font-semibold mb-3 border-l-4 border-blue-600 pl-2">
                {cat || "Chưa có chủ đề"}
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {grouped[cat].map((post) => (
                  <div
                    key={post.id}
                    className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                  >
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-40 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <h4 className="font-semibold text-lg">{post.title}</h4>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {post.content}
                      </p>
                      <div className="flex justify-between items-center mt-3 text-sm">
                        <span
                          className={`px-2 py-1 rounded ${
                            post.status === "Public"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {post.status}
                        </span>
                        <span className="text-gray-400">{post.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
