import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

export default function Products() {
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:8000/products");
    setProducts(result.data.products);
  };

  const viewProduct = async (id) => {
    const result = await axios.get(`http://localhost:8000/view_product/${id}`);
    setProduct(result.data.product);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8000/delete_product/${id}`);
    loadProducts();
  };

  const columns = [
    {
      name: "Product Code",
      selector: (row) => row.product_code,
      sortable: true,
    },
    {
      name: "Product Name",
      selector: (row) => row.product_name,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Stock Count",
      selector: (row) => row.qty,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Action",
      width: "170px",
      selector: (row) => (
        <div>
          <button
            onClick={() => viewProduct(row._id)}
            data-modal-target="defaultModal"
            data-modal-toggle="defaultModal"
            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-lg px-2.5 py-1.5 text-sm text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600"
            type="button"
          >
            <i className="fa-solid fa-eye"></i>
          </button>
          <div
            id="defaultModal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
          >
            <div className="relative w-full h-full max-w-2xl md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-100">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-300">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-700">
                    {product.product_code} {product.product_name}
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-400 dark:hover:text-white"
                    data-modal-hide="defaultModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="product_code"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                        >
                          Product Code
                        </label>
                        <input
                          type="text"
                          id="product_code"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="product_code"
                          value={product.product_code}
                          disabled
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="product_name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                        >
                          Product Name
                        </label>
                        <input
                          type="text"
                          id="product_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="product_name"
                          value={product.product_name}
                          disabled
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="price"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                        >
                          Price
                        </label>
                        <input
                          type="text"
                          id="price"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="price"
                          value={product.price}
                          disabled
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="qty"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                        >
                          Qty
                        </label>
                        <input
                          type="number"
                          id="qty"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="qty"
                          value={product.qty}
                          disabled
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="main_category"
                          className="block mb-2 text-sm font-medium text-gray dark:text-gray"
                        >
                          Main Category
                        </label>
                        <input
                          type="text"
                          id="main_category"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="main_category"
                          value={product.main_category}
                          disabled
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="sub_category"
                          className="block mb-2 text-sm font-medium text-gray dark:text-gray"
                        >
                          Sub Category
                        </label>
                        <input
                          type="text"
                          id="sub_category"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="sub_category"
                          value={product.sub_category}
                          disabled
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="warranty"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                        >
                          Warranty
                        </label>
                        <input
                          type="text"
                          id="warranty"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="warranty"
                          value={product.warranty}
                          disabled
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="supplier_id"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                        >
                          Supplier ID
                        </label>
                        <input
                          type="text"
                          id="supplier_id"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="supplier_id"
                          value={product.supplier_id}
                          disabled
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="status"
                          className="block mb-2 text-sm font-medium text-gray dark:text-gray"
                        >
                          Product Status
                        </label>
                        <input
                          type="text"
                          id="status"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="status"
                          value={product.status}
                          disabled
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <a
            href={`/admin/EditProduct/${row._id}`}
            type="button"
            className="text-yellow-700 hover:text-white border border-yellow-700 hover:bg-yellow-800 font-medium rounded-lg px-2.5 py-1.5 text-sm text-center mr-2 mb-2 dark:border-yellow-500 dark:text-yellow-500 dark:hover:text-white dark:hover:bg-yellow-600"
          >
            <i className="fa-solid fa-edit"></i>
          </a>
          <button
            type="button"
            onClick={() => deleteProduct(row._id)}
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg px-2.5 py-1.5 text-sm text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="/admin"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Dashboard
                </a>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                    Products
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-gray-700">
            Products Details
          </h2>
          <br />

          <a
            href="/admin/NewProduct"
            type="button"
            className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-100 mr-2 mb-2 border border-gray-200 dark:border-gray-400"
          >
            <i className="fa-solid fa-plus"></i>&nbsp;ADD NEW PRODUCT
          </a>

          <DataTable
            columns={columns}
            data={products}
            //fixedHeader
            responsive
            highlightOnHover
            pagination
            subHeader
            subHeaderComponent={
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-500 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                  />
                </div>
              </div>
            }
          ></DataTable>
        </div>
      </div>
    </div>
  );
}
