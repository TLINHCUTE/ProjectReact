import { useState } from "react";
import CreatePostForm from "../../components/CreatePostForm";
import PostList from "../../components/PostList";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

export default function CreatePostPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (post: Post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <CreatePostForm onAdd={addPost} />
      <PostList posts={posts} />
    </div>
  );
}
