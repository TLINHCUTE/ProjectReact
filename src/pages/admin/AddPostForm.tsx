import { useState, useEffect } from "react";

export default function AddPostForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"Public" | "Private">("Public");
  const [image, setImage] = useState<File | null>(null);
  const [topics, setTopics] = useState<string[]>([]);

  useEffect(() => {
    // Giả lập dữ liệu chủ đề
    setTopics(["Công nghệ", "Học tập", "Đời sống", "Tin tức"]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      category,
      content,
      status,
      image: image ? URL.createObjectURL(image) : "",
      date: new Date().toLocaleDateString(),
    };

    // Lưu bài viết vào localStorage
    const existing = JSON.parse(localStorage.getItem("posts") || "[]");
    localStorage.setItem("posts", JSON.stringify([newPost, ...existing]));

    alert(`✅ Đã thêm bài viết "${title}"`);
    setTitle("");
    setCategory("");
    setContent("");
    setStatus("Public");
    setImage(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">📝 Thêm bài viết mới</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-medium">Tiêu đề:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
          </div>

          <div>
            <label className="font-medium">Chủ đề:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded px-3 py-2 mt-1"
              required
            >
              <option value="">-- Chọn chủ đề --</option>
              {topics.map((t, i) => (
                <option key={i} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-medium">Nội dung:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border rounded px-3 py-2 mt-1"
              rows={5}
            />
          </div>

          <div>
            <label className="font-medium">Trạng thái:</label>
            <div className="flex gap-4 mt-1">
              <label>
                <input
                  type="radio"
                  checked={status === "Public"}
                  onChange={() => setStatus("Public")}
                />{" "}
                Public
              </label>
              <label>
                <input
                  type="radio"
                  checked={status === "Private"}
                  onChange={() => setStatus("Private")}
                />{" "}
                Private
              </label>
            </div>
          </div>

          <div>
            <label className="font-medium">Ảnh minh họa:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="block mt-2"
            />
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="mt-3 w-40 h-28 object-cover rounded border"
              />
            )}
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Thêm bài viết
          </button>
        </form>
      </div>
    </div>
  );
}
