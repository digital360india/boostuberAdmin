// MenuCard.js
import React from "react";
import Link from "next/link";

const MenuCard = ({ option, index }) => {
  const path = `/${option.name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Link href={path}className=" rounded-lg overflow-hidden shadow-md p-4 mb-4 w-60 flex flex-col transform transition-transform duration-300 ease-in-out hover:scale-105">
  
    <div className="flex  items-center justify-between flex-grow">
      <p className="text-lg font-semibold mb-2">{option.name}</p>
      <div className="text-blue-500 hover:underline">{option.name}</div>
    </div>
      
    </Link>
  );
};

export default MenuCard;
