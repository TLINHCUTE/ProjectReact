import { Routes, Route } from "react-router-dom";
import Header from "./layouts/user/Header";
import Footer from "./layouts/user/Footer";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import AdminPostList from "./pages/admin/AdminPostList";
import AddPostForm from "./pages/admin/AddPostForm";
import ArticleList from "./pages/admin/ArticleList";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/admin" element={<AdminPostList />} />
          <Route path="/admin/add-post" element={<AddPostForm />} />
          <Route path="/admin/posts" element={<ArticleList />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
