import React from "react";

export default function CompletePur() {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          style={{ width: "100%" }}
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-300 dark:text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                Products Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Total Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-200 dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100">
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray">
                #<u>243329845788</u>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray">
                2
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray">
                $599
              </td>
              <td className="px-6 py-4">
                <button
                  type="button"
                  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  Order Details
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-200 dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100">
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray">
                #<u>243329845788</u>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray">
                1
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray">
                $599
              </td>
              <td className="px-6 py-4">
                <button
                  type="button"
                  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  Order Details
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-200 dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100">
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray">
                #<u>243329845788</u>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray">
                3
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray">
                $599
              </td>
              <td className="px-6 py-4">
                <button
                  type="button"
                  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  Order Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
