import React from "react";

export default function HomeAdmin() {
  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol>
              <li aria-current="page">
                <div className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Dashboard
                </div>
              </li>
            </ol>
          </nav>
          <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-gray-700">
            Dashboard
          </h2>
          <br />
        </div>
      </div>
    </div>
  );
}
