export function SearchBar() {
  return (
    <div className="flex flex-row border-none bg-gray-300 relative">
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-300 p-2  focus:border-gray-300"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 absolute top-3 right-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
}
