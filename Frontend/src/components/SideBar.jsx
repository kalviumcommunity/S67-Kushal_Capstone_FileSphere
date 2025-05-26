import { useState } from 'react';
import { Link } from 'react-router-dom';
import folder from '../assets/folder.svg';
import dashboard from '../assets/dashboard.svg';

function FileSphere() {
  const [isOpen, setIsOpen] = useState(true);
  const [folders, setFolders] = useState([]);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  const addFolder = () => {
    setFolders([...folders, `Folder ${folders.length + 1}`]);
  };

  return (
    <div className="w-64 h-screen bg-slate-200 flex flex-col">
      <div className="p-4 border-b border-gray-300">
        <Link to="/" className="flex items-center gap-2">
          <img src={folder} alt="folder" className="w-5 h-5" />
          <h1 className="text-xl font-medium">File Sphere</h1>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="mt-10 mx-4">
          <Link to="/dashboard">
            <div className="bg-white p-3 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-100">
              <img src={dashboard} alt="dashboard" className="w-4 h-4" />
              <span className="font-medium">Dashboard</span>
            </div>
          </Link>
        </div>

        {/* Folder Section */}
        <div className="mt-9 mx-4">
          <div className="bg-white rounded-lg overflow-hidden">
            <div 
              className="p-3 flex justify-between items-center cursor-pointer"
              onClick={toggleFolder}
            >
              <div className="flex items-center gap-2">
                <img src={folder} alt="folder" className="w-5 h-5" />
                <span>All folder</span>
              </div>
              <span>{isOpen ? '▲' : '▼'}</span>
            </div>

            {isOpen && (
              <div className="border-t border-gray-200 max-h-60 overflow-y-auto">
                {folders.map((folder, index) => (
                  <div key={index} className="p-3 border-b border-gray-200">
                    {folder}
                  </div>
                ))}
                <div 
                  className="p-3 flex items-center gap-2 text-gray-600 cursor-pointer"
                  onClick={addFolder}
                >
                  <span>+</span>
                  <span>Add Folder</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Profile */}
      <div className="mb-15 mx-4">
        <Link to="/profile">
          <div className="bg-white p-3 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-100">
            <span>Profile</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FileSphere;