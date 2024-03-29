"use client";

import { FiChevronsDown } from "react-icons/fi";

export default function Continue() {
  const handleClick = () => {
    console.log(window.innerHeight);
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute w-full justify-center bottom-0 sm:bottom-8 flex">
      <div
        className="flex text-5xl text-primary-dark cursor-pointer h-16 w-16 items-center justify-center rounded-full animate-go-down"
        onClick={handleClick}
      >
        <FiChevronsDown />
      </div>
    </div>
  );
}
