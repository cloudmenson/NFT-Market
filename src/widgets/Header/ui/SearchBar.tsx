"use client";

import { Search } from "@/assets";

export const SearchBar = () => {
  return (
    <div className="relative h-[40px] w-full max-w-[360px] cursor-text">
      {/* Іконка пошуку */}
      <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-[#fff]" />

      {/* Інпут */}
      <input
        type="text"
        placeholder="Search OpenSea"
        className="h-full w-full rounded-[5px] border border-[#26272D] bg-[#1A1A1A] py-[8px] pr-[6px] pl-[35px] text-[14px] leading-[14px] text-white transition outline-none placeholder:text-[#FFF] focus:border-[#3B82F6]"
      />

      {/* Підказка з клавішею */}
      <div className="absolute top-1/2 right-2 -translate-y-1/2 rounded-[5px] border border-[#26272D] px-[7px] py-[1.5px] font-mono text-sm text-[#fff]">
        /
      </div>
    </div>
  );
};
