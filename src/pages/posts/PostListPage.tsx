import PostList from "../../components/PostList";

const dummyPosts = [
  {
    id: 1,
    title: "Lập trình React cơ bản",
    content: "Học cách sử dụng component, state, props...",
    author: "Minh Thu",
    date: "2025-10-17 08:00",
  },
  {
    id: 2,
    title: "Giới thiệu TailwindCSS",
    content: "Tailwind giúp thiết kế giao diện nhanh và đẹp mắt hơn.",
    author: "Hồng Vân",
    date: "2025-10-17 09:15",
  },
];

export default function PostListPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <PostList posts={dummyPosts} />
    </div>
  );
}
