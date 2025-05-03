import React from "react";

export default function FilterCountry({
  countries,
  handleChange,
  handleInput,
}) {
  return (
    <div className="container mx-auto px-4">
      <form className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <label className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-md shadow px-4 py-2 w-full sm:w-1/2">
          <svg
            className="h-5 w-5 opacity-50 text-gray-500 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={handleInput}
            type="search"
            required
            placeholder="Search for a country…"
            className="w-full bg-transparent outline-none  dark:text-white"
          />
        </label>
      </form>
    </div>
  );
}
