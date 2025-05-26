import Sidebar from '../components/SideBar';

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-semibold mb-4">Welcome to File Sphere Dashboard</h1>
      </main>
    </div>
  );
}

export default Dashboard;