import { useState } from "react";
import { MdOutlineDashboard, MdInventory } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { LuTruck } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { RiCurrencyFill } from "react-icons/ri";
import { IoStatsChart } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  {
    label: "Dashboard",
    icon: <MdOutlineDashboard className="w-6 h-6" />,
    path: "/dashboard",
  },
  {
    label: "Products",
    icon: <AiOutlineProduct className="w-6 h-6" />,
    path: "/products",
  },
  {
    label: "Suppliers",
    icon: <LuTruck className="w-6 h-6" />,
    path: "/suppliers",
  },
  {
    label: "Customers",
    icon: <FiUsers className="w-6 h-6" />,
    path: "/customers",
  },
  {
    label: "Transactions",
    icon: <RiCurrencyFill className="w-6 h-6" />,
    path: "/transactions",
  },
  {
    label: "Reports",
    icon: <IoStatsChart className="w-6 h-6" />,
    path: "/reports",
  },
  {
    label: "Settings",
    icon: <FaGear className="w-6 h-6" />,
    path: "/settings",
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-[var(--color-bg)] text-[var(--color-text-primary)] transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-start pl-4 border-b border-[var(--color-border)]">
          {!collapsed ? (
            <>
              <MdInventory className="w-6 h-6 text-[var(--color-accent)]" />
              <h1 className="pl-2 text-xl font-bold">IMS</h1>
            </>
          ) : (
            <span className="flex items-center justify-center">
              <MdInventory className="w-6 h-6 text-[var(--color-accent)]" />
            </span>
          )}
        </div>

        {/* Nav Items */}
        <div className="flex-1">
          {navItems.map((item, idx) => {
            const isActive = location.pathname === item.path;
            return (
              <div
                key={idx}
                className={`flex items-center gap-4 px-4 py-3 cursor-pointer transition-colors ${
                  isActive
                    ? "bg-[var(--color-bg-secondary)] text-[var(--color-bg)] font-semibold"
                    : "hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-sidebar)]"
                }`}
                onClick={() => navigate(item.path)}
              >
                {item.icon}
                {!collapsed && <span>{item.label}</span>}
              </div>
            );
          })}
        </div>

        {/* Toggle Button */}
        <div className="p-4 border-t border-[var(--color-border)]">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center gap-2 py-2 hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-sidebar)] rounded"
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
