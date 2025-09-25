import { CogIcon, HomeIcon, UserIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const navItems = [
  { label: "Home", icon: <HomeIcon className="w-6 h-6" /> },
  { label: "Profile", icon: <UserIcon className="w-6 h-6" /> },
  { label: "Settings", icon: <CogIcon className="w-6 h-6" /> },
];
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-center border-b border-gray-700">
          {!collapsed ? (
            <h1 className="text-xl font-bold">IMS</h1>
          ) : (
            <span>IMS</span>
          )}
        </div>

        {/* Nav Items */}
        <div className="flex-1">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-4 py-3 hover:bg-gray-700 cursor-pointer"
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center gap-2 py-2 bg-gray-700 hover:bg-gray-600 rounded"
          >
            {collapsed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {!collapsed && <span>Collapse</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
