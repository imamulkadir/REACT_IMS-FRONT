import React, { useState } from "react";
import RecordSales from "./RecordSales";
import RecordPurchases from "./RecordPurchases";

const Transactions = () => {
  const [activeTab, setActiveTab] = useState("sales");
  return (
    <div className="p-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Transactions</h1>
          <p className="text-[var(--color-text-secondary)]">
            Record purchase and sales transactions
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {/* name of each tab group should be unique */}
          <div className="tabs tabs-box flex justify-center w-full rounded-full">
            <input
              type="radio"
              name="my_tabs_1"
              className="tab text-center flex-1 font-medium !rounded-l-full"
              aria-label="Sales (Stock Out)"
              defaultChecked
              onClick={() => setActiveTab("sales")}
            />

            <input
              type="radio"
              name="my_tabs_1"
              className="tab text-center flex-1 font-medium !rounded-r-full"
              aria-label="Purchases (Stock In)"
              onClick={() => setActiveTab("purchases")}
            />
          </div>
          <div className="border-base-300 bg-base-100 rounded-xl mt-6">
            {activeTab === "sales" ? <RecordSales /> : <RecordPurchases />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
