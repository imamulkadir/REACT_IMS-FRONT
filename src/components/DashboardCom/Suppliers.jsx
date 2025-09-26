import { BiSolidEdit } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";

const Suppliers = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Suppliers</h1>
          <p className="text-[var(--color-text-secondary)]">
            Manage your suppliers relationships
          </p>
        </div>
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="text-[var(--color-btn-text)] bg-[var(--color-btn-bg)] px-4 py-2 rounded-md flex items-center gap-2 font-medium cursor-pointer hover:bg-[var(--color-accent)] hover:text-[var(--color-btn-text)] transition-all duration-300"
        >
          <FaPlus className="w-4 h-4" /> Add Supplier
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
            <h3 className="font-bold text-lg">Add New Supplier</h3>
            <div className="mt-2 flex flex-col gap-2">
              <label htmlFor="supplierName" className="text-sm font-medium">
                Supplier Name
              </label>
              <input
                type="text"
                id="supplierName"
                className="input input-bordered w-full"
                placeholder="Enter supplier name"
              />
              <label htmlFor="contactNumber" className="text-sm font-medium">
                Contact Number
              </label>
              <input
                type="text"
                id="contactNumber"
                className="input input-bordered w-full"
                placeholder="Enter contact number"
              />
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input input-bordered w-full"
                placeholder="Enter supplier email"
              />
              <label htmlFor="address" className="text-sm font-medium">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="input input-bordered w-full"
                placeholder="Enter supplier address"
              />
              <label htmlFor="productsSupplied" className="text-sm font-medium">
                Products Supplied
              </label>
              <input
                type="text"
                id="productsSupplied"
                className="input input-bordered w-full"
                placeholder="Enter products supplied"
              />
              <button className="mt-2 text-[var(--color-btn-text)] bg-[var(--color-btn-bg)] text-center px-4 py-2 rounded-md font-sm cursor-pointer hover:bg-[var(--color-accent)] hover:text-[var(--color-btn-text)] transition-all duration-300">
                Add Supplier
              </button>
            </div>
          </div>
        </dialog>
      </div>

      <div className="mt-6 flex flex-col gap-2 bg-[var(--color-bg)] p-4 rounded-md">
        <h2 className="text-md">Supplier List</h2>
        <table className="table">
          <thead>
            <tr className="border-b border-[var(--color-bg-secondary)]">
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Supplier Name
              </th>
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Email
              </th>
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Contact
              </th>
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Products Supplied
              </th>
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Address
              </th>
              <th className="text-sm text-[var(--color-text-primary)] font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-base-300">
              <td>Supplier 1</td>
              <td>supplier1@gmail.com</td>
              <td>+8801712345678</td>
              <td>Product 1, Product 2, Product 3</td>
              <td>Dhaka, Bangladesh</td>
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

export default Suppliers;
