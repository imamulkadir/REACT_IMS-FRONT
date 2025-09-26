import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { LuTruck } from "react-icons/lu";

const Dashboard = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-[var(--color-text-secondary)]">
          Welcome back! Here's a quick overview of your business.
        </p>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card bg-[var(--color-bg)] border border-[var(--color-border)] hover:shadow-sm transition-all duration-300">
            <div className="card-body p-4">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">Total Products</h2>
                <AiOutlineProduct className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <p className="text-[var(--color-text-secondary)] text-2xl font-bold">
                100
              </p>
            </div>
          </div>
          <div className="card bg-[var(--color-bg)] border border-[var(--color-border)] hover:shadow-sm transition-all duration-300">
            <div className="card-body p-4">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">Total Customers</h2>
                <FiUsers className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <p className="text-[var(--color-text-secondary)] text-2xl font-bold">
                100
              </p>
            </div>
          </div>
          <div className="card bg-[var(--color-bg)] border border-[var(--color-border)] hover:shadow-sm transition-all duration-300">
            <div className="card-body p-4">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">Total Sales</h2>
                <RiMoneyDollarCircleFill className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <p className="text-[var(--color-text-secondary)] text-2xl font-bold">
                100
              </p>
            </div>
          </div>
          <div className="card bg-[var(--color-bg)] border border-[var(--color-border)] hover:shadow-sm transition-all duration-300">
            <div className="card-body p-4">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">Suppliers</h2>
                <LuTruck className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <p className="text-[var(--color-text-secondary)] text-2xl font-bold">
                100
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1>Chart</h1>
      </div>
    </div>
  );
};

export default Dashboard;
