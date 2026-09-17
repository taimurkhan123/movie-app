import React, { useState } from "react";

const Navbar = ({onSearch}) => {
  const[input,setInput] = useState("");

  const handleClick = () => {
    onSearch(input)
    setInput("")
  }
  return (
    <div
      className="sticky top-0 z-50 bg-[#101010]/80 backdrop-blur-xl border-b border-white/10
     px-6 md:px-10 py-4 flex flex-col md:flex-row justify-between items-center gap-4"
    >
      <div className="text-2xl font-black tracking-tighter text-white  ">
        Movie
        <span className="text-amber-400">App</span>
      </div>

      <div
        className="flex items-center w-full md:w-auto gap-2 bg-white/10 p-1.5 rounded-full 
      border border-white/10"
      >
        <input
          type="text"
          placeholder="search popular movies..."
          className="bg-transparent outline-none text-white 
        placeholder:text-white/60 px-5 py-2 w-full md:w-75 text-sm"
        value={input} onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        />

        <button
          className="bg-amber-400 hover:bg-amber-300 text-black font-bold px-6 py-2.5 rounded-full 
        text-sm transition-all active:scale-95"
        onClick={handleClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
