"use client";
import { FaSearch } from "react-icons/fa";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { IoPersonSharp } from "react-icons/io5";
import Link from "next/link";
function Searchbar() {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };


  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    <div className="w-full">
      <div className="flex items-center relative w-[170px] md:w-[400px] mx-auto rounded-full py-2 px-4 shadow-sm border border-gray-300 bg-white">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Start your search"
          className="placeholder text-sm w-full text-gray-600 placeholder-gray-400 flex-grow bg-transparent outline-none"
        />
        <FaSearch className="h-8 w-8 absolute right-2  bg-red-400 text-white rounded-full p-2 ml-2 flex-shrink-0" />
      </div>
      <div>
        {input && (
          <div className="relative">
            <div className="flex flex-col col-span-3 mx-auto absolute z-300 left-[50%] top-[100%] translate-x-[-50%] mt-2 bg-white rounded-lg shadow-lg p-4">
              <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
                rangeColors={["#fd5861"]}
                minDate={new Date()}
              />
            </div>
            <hr className="text-gray-400" />
            <div className="absolute z-287 w-[250px] md:w-[590px] py-2 px-4 mt-93 left-[50%] translate-x-[-50%] mt-2 bg-white shadow-lg p-4">
              <div className="flex items-center justify-between mt-4">
              <h2 className="text-2xl font-bold">Number of Guestes</h2>
              <div className="flex items-center space-x-2">
                <IoPersonSharp />
              <input
                type="text"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                className="border border-gray-300 rounded-md px-2 py-1 w-16"
              />
              </div>
            </div>
              <hr className="text-gray-400 mt-1.5" />
            <div className="flex justify-evenly mt-4">
              <button
               className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500"
              onClick={() => setInput("")}
               >
                <Link href={{
                  pathname: "../../pages/search",
                  search: `?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&guests=${guests}`,
                }} className="text-white">
                  Search
                </Link>
              </button>
              <button
              onClick={() => setInput("")}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                Cancel
              </button>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
