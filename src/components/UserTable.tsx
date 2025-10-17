import { useEffect, useState } from "react";
import usersData from "../data/users.json"; // 👈 import file JSON

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  status?: string;
}

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);

  // Load dữ liệu từ JSON khi component mount
  useEffect(() => {
    const loadedUsers = usersData.users.map((u) => ({
      ...u,
      status: "hoạt động",
    }));
    setUsers(loadedUsers);
  }, []);

  const handleBlock = (id: number) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: "bị chặn" } : u
      )
    );
  };

  const handleUnblock = (id: number) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: "hoạt động" } : u
      )
    );
  };

  return (
    <div className="flex-1 p-6">
      <h2 className="text-lg font-semibold mb-4">Danh sách người dùng</h2>
      <table className="min-w-full bg-white border rounded-lg shadow-sm">
        <thead>
          <tr className="border-b bg-gray-50 text-left">
            <th className="p-3">Họ tên</th>
            <th className="p-3">Email</th>
            <th className="p-3">Trạng thái</th>
            <th className="p-3">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{user.firstname + " " + user.lastname}</td>
              <td className="p-3">{user.email}</td>
              <td
                className={`p-3 font-medium ${
                  user.status === "hoạt động"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {user.status}
              </td>
              <td className="p-3 space-x-2">
                {user.status === "hoạt động" ? (
                  <button
                    onClick={() => handleBlock(user.id)}
                    className="text-red-500 hover:underline"
                  >
                    Chặn
                  </button>
                ) : (
                  <button
                    onClick={() => handleUnblock(user.id)}
                    className="text-blue-500 hover:underline"
                  >
                    Mở chặn
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
