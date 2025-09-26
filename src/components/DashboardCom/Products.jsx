import { BiSolidEdit } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";

const Products = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-[var(--color-text-secondary)]">
            Manage your product inventory here
          </p>
        </div>
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="text-[var(--color-btn-text)] bg-[var(--color-btn-bg)] px-4 py-2 rounded-md flex items-center gap-2 font-medium cursor-pointer hover:bg-[var(--color-accent)] hover:text-[var(--color-btn-text)] transition-all duration-300"
        >
          <FaPlus className="w-4 h-4" /> Add Product
        </button>

        <dialog
          id="my_modal_3"
          className="modal fixed inset-0 m-0 w-full h-full max-h-full overflow-y-auto"
        >
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Add New Product</h3>
            <div className="mt-2 flex flex-col gap-2">
              <label htmlFor="productName" className="text-sm font-medium">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                className="input input-bordered w-full"
              />
              <label htmlFor="productCategory" className="text-sm font-medium">
                Product Category
              </label>
              <select
                id="productCategory"
                className="select select-bordered w-full cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Office Supplies">Office Supplies</option>
                <option value="Other">Other</option>
              </select>
              <label htmlFor="productQuantity" className="text-sm font-medium">
                Product Quantity
              </label>
              <input
                type="number"
                id="productQuantity"
                className="input input-bordered w-full"
              />
              <label htmlFor="productPrice" className="text-sm font-medium">
                Product Price
              </label>
              <input
                type="number"
                id="productPrice"
                className="input input-bordered w-full"
              />
              <label htmlFor="productSupplier" className="text-sm font-medium">
                Product Supplier
              </label>
              <select
                id="productSupplier"
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
              <button className="mt-2 text-[var(--color-btn-text)] bg-[var(--color-btn-bg)] text-center px-4 py-2 rounded-md font-sm cursor-pointer hover:bg-[var(--color-accent)] hover:text-[var(--color-btn-text)] transition-all duration-300">
                Add Product
              </button>
            </div>
          </div>
        </dialog>
      </div>

      <div className="mt-6 flex flex-col gap-2 bg-[var(--color-bg)] p-4 rounded-md">
        <h2 className="text-md">Product List</h2>
        <table className="table">
          <thead>
            <tr className="border-b border-[var(--color-bg-secondary)]">
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Product Name
              </th>
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Category
              </th>
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Quantity
              </th>
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Unit Price
              </th>
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Total Price
              </th>
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Supplier
              </th>
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-base-300">
              <td>Product 1</td>
              <td>Category 1</td>
              <td>10</td>
              <td>$100</td>
              <td>$1000</td>
              <td>Supplier 1</td>
              <td className="flex gap-4">
                <BiSolidEdit className="w-5 h-5 hover:text-[var(--color-accent)] cursor-pointer" />
                <BiSolidTrash className="w-5 h-5 hover:text-[var(--color-error)] cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
