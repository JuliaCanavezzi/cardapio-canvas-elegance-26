
import React from "react";

const Header = () => {
  return (
    <header className="bg-wine py-4 px-6 flex items-center justify-between shadow-md">
      {/* Placeholder for restaurant logo on the left (mobile only) */}
      <div className="md:hidden flex items-center">
        <div className="w-10 h-10 bg-white/20 rounded-md flex items-center justify-center text-white text-xs">
          LOGO
        </div>
      </div>
      
      {/* Main Logo */}
      <div className="flex-1 flex justify-center">
        <h1 className="text-white font-cursive text-3xl md:text-4xl font-medium tracking-wide">
          Cardápio Desk
        </h1>
      </div>
      
      {/* Placeholder for restaurant logo on the right */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-white/20 rounded-md flex items-center justify-center text-white text-xs">
          LOGO
        </div>
      </div>
    </header>
  );
};

export default Header;
