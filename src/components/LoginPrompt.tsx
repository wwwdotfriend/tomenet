import React from "react";
import LoginModal from "./modals/LoginModal";

export default function LoginPrompt() {
  return (
    <div className="fixed bottom-0 flex h-[80px] w-full items-center justify-center bg-amber-600 md:space-x-5 lg:justify-between xl:px-40 2xl:px-80">
      <div className="hidden flex-col text-white md:flex">
        <span className="text-xl font-bold">Where's the fire?</span>
        <span>Students on AshTag are always the first to know.</span>
      </div>

      <div className="flex w-full space-x-2 p-3 md:w-fit">
        <LoginModal />
      </div>
    </div>
  );
}
