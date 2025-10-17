interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

export default function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0)
    return (
      <p className="text-center text-gray-500 mt-6">Chưa có bài viết nào được đăng.</p>
    );

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
        >
          <h3 className="text-xl font-bold text-blue-700">{post.title}</h3>
          <p className="text-gray-600 text-sm mb-2">
            🖋 {post.author} • 🕓 {post.date}
          </p>
          <p className="text-gray-800">{post.content}</p>
        </div>
      ))}
    </div>
  );
}
