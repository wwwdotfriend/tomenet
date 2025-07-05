import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export default function Widgets() {
  return (
    <div className="hidden lg:flex w-[400px] flex-col space-y-4 p-3">
      <div className="flex h-[44px] items-center space-x-3 rounded-2xl bg-[#292827] pl-5 text-[#928F8C]">
        <MagnifyingGlassIcon className="h-[20px] w-[20px]" />
        <input
          type="text"
          placeholder="Search AshTag"
          className="bg-transparent outline-none"
        />
      </div>

      <div className="rounded-xl bg-[#292827] p-3">
        <span className="mb-2 font-[Aoboshi] text-xl font-bold">
          What's Happening?
        </span>

        <div className="flex flex-col py-3 text-[13px]">
          <div className="flex justify-between text-[#bbbab8]">
            <span>Trending On Campus</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>

          <span className="text-[14px] font-bold">#500Years</span>

          <span className="text-xs text-[#bbbab8]">3.2k Posts</span>
        </div>

        <div className="flex flex-col py-3 text-[13px]">
          <div className="flex justify-between text-[#bbbab8]">
            <span>Trending On Campus</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>

          <span className="text-[14px] font-bold">#500Years</span>

          <span className="text-xs text-[#bbbab8]">3.2k Posts</span>
        </div>

        <div className="flex flex-col py-3 text-[13px]">
          <div className="flex justify-between text-[#bbbab8]">
            <span>Trending On Campus</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>

          <span className="text-[14px] font-bold">#500Years</span>

          <span className="text-xs text-[#bbbab8]">3.2k Posts</span>
        </div>

        <div className="flex flex-col py-3 text-[13px]">
          <div className="flex justify-between text-[#bbbab8]">
            <span>Trending On Campus</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>

          <span className="text-[14px] font-bold">#500Years</span>

          <span className="text-xs text-[#bbbab8]">3.2k Posts</span>
        </div>

        <div className="flex flex-col py-3 text-[13px]">
          <div className="flex justify-between text-[#bbbab8]">
            <span>Trending On Campus</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>

          <span className="text-[14px] font-bold">#500Years</span>

          <span className="text-xs text-[#bbbab8]">3.2k Posts</span>
        </div>
      </div>
    </div>
  );
}
