import Sidebar from '../components/SideBar';

export default function Profile() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-semibold mb-4">Welcome to File Sphere Profile</h1>
      </main>
    </div>
  );
}
