'use client'
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard"},
    { title: "Employees"},
    { title: "Leaveboard" },
    { title: "Attendance" },
    { title: "Taskboard"},
    { title: "Payroll" },
    { title: "Setting"},
  ];

  return (
    <div className={` ${open ? "w-72" : "w-20 "} bg-gray-400 h-screen p-5 pt-8 relative duration-300`}>
    
      <div className="flex gap-x-4 items-center">
        <h1 className={` origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
          HR Management
        </h1>
      </div>

      <div className="flex items-center mb-4 mt-4">
        <div className={` ${!open && "scale-0"}`}>
          <p className=" text-lg">John Doe</p>
          <p className="text-sm ">Admin</p>
        </div>
      </div>

      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white  text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
          >
            <Link href={`/${Menu.title.toLowerCase()}`}>
              <div className="flex">
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

