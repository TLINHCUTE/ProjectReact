import { Routes, Route } from "react-router-dom";
import Header from "./layouts/user/Header";
import Footer from "./layouts/user/Footer";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddPostForm from "./pages/admin/AddPostForm";
import ManagePosts from "./pages/admin/ManagePosts";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageTopics from "./pages/admin/ManageTopics";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          {/* Auth */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<ManagePosts />} />
            <Route path="add-post" element={<AddPostForm />} />
            <Route path="posts" element={<ManagePosts />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="topics" element={<ManageTopics />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}
