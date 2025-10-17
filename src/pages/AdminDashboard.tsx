import Sidebar from "../components/Sidebar";
import UserTable from "../components/UserTable";

export default function AdminDashboard() {
  return (
    <div className="flex bg-gray-50">
      <Sidebar />
      <UserTable />
    </div>
  );
}
