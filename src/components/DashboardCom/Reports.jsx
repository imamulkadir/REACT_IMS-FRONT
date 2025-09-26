import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { MdSummarize } from "react-icons/md";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";

const Reports = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Reports</h1>
        <p className="text-[var(--color-text-secondary)]">
          Analyze your inventory performance and sales trends.
        </p>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card bg-[var(--color-bg)] border border-[var(--color-border)] hover:shadow-sm transition-all duration-300">
            <div className="card-body p-4">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">Total Revenue</h2>
                <HiOutlineCurrencyDollar className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <p className="text-[var(--color-text-secondary)] text-2xl font-bold">
                $100
              </p>
            </div>
          </div>
          <div className="card bg-[var(--color-bg)] border border-[var(--color-border)] hover:shadow-sm transition-all duration-300">
            <div className="card-body p-4">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">Total Transactions</h2>
                <MdSummarize className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <p className="text-[var(--color-text-secondary)] text-2xl font-bold">
                $1000
              </p>
            </div>
          </div>
          <div className="card bg-[var(--color-bg)] border border-[var(--color-border)] hover:shadow-sm transition-all duration-300">
            <div className="card-body p-4">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">Avg. Order Value</h2>
                <RiMoneyDollarCircleFill className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <p className="text-[var(--color-text-secondary)] text-2xl font-bold">
                $100
              </p>
            </div>
          </div>
          <div className="card bg-[var(--color-bg)] border border-[var(--color-border)] hover:shadow-sm transition-all duration-300">
            <div className="card-body p-4">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">Inventory Turnover</h2>
                <RiCheckboxMultipleBlankFill className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <p className="text-[var(--color-text-secondary)] text-2xl font-bold">
                5.2x
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>Sales vs Purchases Trend - Line Chart</div>
        <div>Inventory Status - Amount/Month - Bar Chart</div>
        <div>Product Category Distribution - Pie Chart</div>
        <div>Top Selling Products - List</div>
      </div>
    </div>
  );
};

export default Reports;
