
const Search = () => {

  return (
  <div className="flex">
    <div className="mt-16 w-full max-w-content">
      <div className="flex items-stretch mb-4">
        <input
          type="search"
          className="flex-auto px-3 py-3 text-xl font-normal drop-shadow-lg text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm focus:outline-none"
          placeholder="Clarity smart contract audit..."
        />
        <button
         type="button"
         className="px-8 md:px-16 py-2 bg-[#14B8A6] drop-shadow-lg text-white font-semibold text-xl">
           Search
        </button>
      </div>
    </div>
  </div>
  );
}

export default Search;