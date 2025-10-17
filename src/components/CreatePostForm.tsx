import { useState } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

export default function CreatePostForm({ onAdd }: { onAdd: (post: Post) => void }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !author) return alert("Vui lòng điền đầy đủ thông tin!");

    const newPost: Post = {
      id: Date.now(),
      title,
      content,
      author,
      date: new Date().toLocaleString(),
    };

    onAdd(newPost);
    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">📝 Tạo bài viết mới</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Tiêu đề bài viết"
          className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Nội dung bài viết"
          className="border rounded-lg p-2 h-32 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <input
          type="text"
          placeholder="Tác giả"
          className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Đăng bài
        </button>
      </form>
    </div>
  );
}
