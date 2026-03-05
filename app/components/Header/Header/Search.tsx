"use client";

import { FaSearch } from "react-icons/fa";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { IoPersonSharp } from "react-icons/io5";
import Link from "next/link";

type Props = {
  placeholder?: string;
};

function Searchbar({ placeholder }: Props) {
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
    <div className="w-full relative">
      {/* Search Input */}
      <div className="flex items-center relative w-[170px] md:w-[400px] mx-auto rounded-full py-2 px-4 shadow-sm border border-gray-300 bg-white">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={placeholder || "Start your search"}
          className="text-sm w-full text-gray-600 placeholder-gray-400 flex-grow bg-transparent outline-none"
        />
        <FaSearch className="h-8 w-8 absolute right-2 bg-red-400 text-white rounded-full p-2" />
      </div>

      {/* Expanded Search */}
      {input && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-lg p-4 z-30 w-[300px] md:w-[600px]">
          
          {/* Date Picker */}
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={["#fd5861"]}
            minDate={new Date()}
          />

          <hr className="my-4" />

          {/* Guests */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Number of Guests</h2>
            <div className="flex items-center space-x-2">
              <IoPersonSharp />
              <input
                type="number"
                min={1}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value) || 1)}
                className="border border-gray-300 rounded-md px-2 py-1 w-16"
              />
            </div>
          </div>

          <hr className="my-4" />

          {/* Buttons */}
          <div className="flex justify-between">
            <Link
              href={{
                pathname: "/pages/search", // لو عندك app/pages/search/page.tsx
                query: {
                  location: input,
                  startDate: startDate.toISOString(),
                  endDate: endDate.toISOString(),
                  guests: guests.toString(),
                },
              }}
              className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500"
              onClick={() => setInput("")}
            >
              Search
            </Link>

            <button
              onClick={() => setInput("")}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Searchbar;