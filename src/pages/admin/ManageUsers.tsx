export default function ManageUsers() {
  const users = [
    { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com", role: "Admin" },
    { id: 2, name: "Trần Thị B", email: "b@gmail.com", role: "User" },
    { id: 3, name: "Phạm Văn C", email: "c@gmail.com", role: "User" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">👤 Quản lý tài khoản</h2>
      <table className="w-full bg-white border rounded-lg shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b text-left">ID</th>
            <th className="py-2 px-4 border-b text-left">Tên người dùng</th>
            <th className="py-2 px-4 border-b text-left">Email</th>
            <th className="py-2 px-4 border-b text-left">Vai trò</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
