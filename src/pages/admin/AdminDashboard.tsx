import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { User, FileText, Folder, PlusCircle } from "lucide-react";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="logo">Admin Dashboard</h2>
        <ul className="menu">
          <li className={activeTab.includes("/users") ? "active" : ""}>
            <Link to="/admin/users" onClick={() => setActiveTab("/admin/users")}>
              <User /> Quản lý người dùng
            </Link>
          </li>
          <li className={activeTab.includes("/posts") ? "active" : ""}>
            <Link to="/admin/posts" onClick={() => setActiveTab("/admin/posts")}>
              <FileText /> Quản lý bài viết
            </Link>
          </li>
          <li className={activeTab.includes("/topics") ? "active" : ""}>
            <Link to="/admin/topics" onClick={() => setActiveTab("/admin/topics")}>
              <Folder /> Danh sách chủ đề
            </Link>
          </li>
          <li className={activeTab.includes("/add-post") ? "active" : ""}>
            <Link to="/admin/add-post" onClick={() => setActiveTab("/admin/add-post")}>
              <PlusCircle /> Thêm bài viết mới
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="admin-content">
        <h1>Trang quản trị</h1>
        <Outlet /> {/* ⚡ Hiển thị trang con tương ứng */}
      </main>
    </div>
  );
}
