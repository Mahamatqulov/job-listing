import React from "react";

function Navbar() {
  return (
    <div className="bg-[#5CA5A5]">
      <picture>
        <source media="(max-width: 640px)" srcSet="./bg-header-mobile.svg" />
        <img
          className="w-full h-auto"
          src="./bg-header-desktop.svg"
          alt="Background Header"
        />
      </picture>
    </div>
  );
}

export default Navbar;
