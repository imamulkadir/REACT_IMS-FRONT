import { FaPlus } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

const RecordPurchases = () => {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(quantity * price);
  }, [quantity, price]);

  return (
    <>
      <div className="p-4 bg-[var(--color-bg)] rounded-xl">
        <h1 className="flex items-center text-md font-medium gap-2 ">
          <IoCartOutline />
          Record Purchases (Stock In)
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 mt-6">
            <label htmlFor="product-name" className="text-sm font-medium">
              Product Name
            </label>
            <select
              id="productName"
              className="select select-bordered w-full cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>
                Select Product
              </option>
              <option value="Product 1">Product 1</option>
              <option value="Product 2">Product 2</option>
              <option value="Product 3">Product 3</option>
              <option value="Product 4">Product 4</option>
              <option value="Product 5">Product 5</option>
              <option value="Other">Other</option>
            </select>

            <div className="flex gap-4 w-full mt-2">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="quantity" className="text-sm font-medium">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="input input-bordered w-full"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="price" className="text-sm font-medium">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="input input-bordered w-full"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
            </div>

            <label htmlFor="supplierName" className="text-sm font-medium">
              Supplier Name
            </label>
            <select
              id="supplierName"
              className="select select-bordered w-full cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>
                Select Supplier
              </option>
              <option value="Supplier 1">Supplier 1</option>
              <option value="Supplier 2">Supplier 2</option>
              <option value="Supplier 3">Supplier 3</option>
              <option value="Supplier 4">Supplier 4</option>
              <option value="Supplier 5">Supplier 5</option>
              <option value="Other">Other</option>
            </select>

            <p className="text-sm font-medium w-full p-2 rounded-md mt-2">
              Total Amount:{" "}
              <span className="font-bold text-2xl">${totalAmount}</span>
            </p>

            <button className="mt-2 text-[var(--color-btn-text)] bg-[var(--color-btn-bg)] px-4 py-2 rounded-md flex items-center justify-center gap-2 font-medium cursor-pointer hover:bg-[var(--color-accent)] hover:text-[var(--color-btn-text)] transition-all duration-300">
              <FaPlus className="w-4 h-4" /> Record Purchase
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-2 bg-[var(--color-bg)] p-4 rounded-md">
        <h2 className="text-md">Purchases History</h2>
        <table className="table">
          <thead>
            <tr className="border-b border-[var(--color-bg-secondary)]">
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Date
              </th>
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Product Name
              </th>
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Quantity
              </th>
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Unit Price
              </th>
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Total Amount
              </th>
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Supplier
              </th>
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-base-300">
              <td>2025-01-01</td>
              <td>Product 1</td>
              <td>10</td>
              <td>$100</td>
              <td>$1000</td>
              <td>Supplier 1</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RecordPurchases;
