import React from "react";
import moon from "../images/moon.svg";
export default function Header() {
  return (
    <header className="shadow-[0px_2px_4px_0px_#0000000E] ">
      <div className="my-container flex items-center justify-between py-6">
        <div>
          <h1 className="text-[#111517] font-extrabold text-2xl">Where in the world?</h1>
        </div>
        <div>
          <span className="flex gap-2">
            <img src={moon} alt="moon img" /> Dark Mode
          </span>
        </div>
      </div>
    </header>
  );
}
