import React from "react";

const Search = ({ search, setSearch, handleSearch, errMsg }) => {
  return (
    <>
      <div className="flex p-4 m sm:flex-row flex-col w-[100%]  items-center justify-center">
        <input
          className="px-2 font-semibold w-[100%] sm:w-[75%] py-2  focus:outline-none"
          type="text"
          placeholder="Enter city"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button
          onClick={handleSearch}
          className="bg-green-400 text-white font-semibold w-[100%] sm:w-[20%] px-2 py-2"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
