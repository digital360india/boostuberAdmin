"use client";
import { useState } from "react";
import Link from "next/link";
const subtopics = {
  Users: [
    "Users",
    "Search User",
    "Banned User",
    "Top Earning User",
    "Active Subsciption",
  ],
  Subscriptions: [
    "Plans",
    "Subsciptions Report",
    "Payment Transaction",
    "Pending Approval",
    "Approved Offline",
  ],
  CoinStore: [
    "Plan",
    "Payment Transcation",
    "Pending Approval",
    "Approved Offline",
  ],
  Support: ["Active Ticket", "Closed Ticket"],
  Withdrawal: [
    "Withdrawal Category",
    "Withdrawal Method",
    "Pending",
    "Completed",
    "Rejected",
  ],
  Games: ["HTML 5 Games"],
  App_Offers: ["Active", "Offertoro Offers", "Completed"],
  Daily_Offers: ["Offers", "Pending Approval", "Approved"],
  Web_Articles: ["Active", "Completed"],
  Promotion_Approval: ["Web Article", "Videowall"],
  Offerwall: ["Sdk Offerwal", "Web Offerwall"],
  VideoZone: ["Videos", "Completed"],
  Contest: ["Contest Task", "Completed User"],
  HomePage_Setting: ["Category", "Home BUtton"],
  Ads: ["Ads Setting", "Native Ads"],
  Admin_Settings: ["Faq", "Fraud Prevention", "App Configuration"],
};

const Menus = [
  { title: "Dashboard" },
  {
    title: "Users",
    subtopics: subtopics.Users,
  },
  { title: "Transaction" },
  { title: "Subscriptions", subtopics: subtopics.Subscriptions },
  { title: "Coin Store", subtopics: subtopics.CoinStore },
  { title: "Support", subtopics: subtopics.Support },
  { title: "Withdrawal", subtopics: subtopics.Withdrawal },
  { title: "Games", subtopics: subtopics.Games },
  { title: "App Offers", subtopics: subtopics.App_Offers },
  { title: "Daily Offers", subtopics: subtopics.Daily_Offers },
  { title: "Web Articles", subtopics: subtopics.Web_Articles },
  { title: "Promotion Approval", subtopics: subtopics.Promotion_Approval },
  { title: "Offer Wall", subtopics: subtopics.Offerwall },
  { title: "Video Zone", subtopics: subtopics.VideoZone },
  { title: "Contest", subtopics: subtopics.Contest },
  { title: "Promotion Banner", subtopics: subtopics.Promotion_Banner },
  { title: "Settings", subtopics: subtopics.HomePage_Setting },
  { title: "App Setting", subtopics: subtopics.App_Setting },
  { title: "Notification", subtopics: subtopics.Notification },
  { title: "Ads", subtopics: subtopics.Ads },
  { title: "Manage Admin", subtopics: subtopics.Manage_Admin },
  { title: "Admin Settings", subtopics: subtopics.Admin_Settings },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [openSubmenus, setOpenSubmenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const toggleSubMenu = (index) => {
    setOpenSubmenus((prevOpenSubmenus) => {
      const isOpen = prevOpenSubmenus.includes(index);
      return isOpen
        ? prevOpenSubmenus.filter((i) => i !== index)
        : [...prevOpenSubmenus, index];
    });
    setSelectedSubtopic(null);
    setSelectedMenu(index);
  };
  const selectSubtopic = (subtopic) => {
    setSelectedSubtopic(subtopic);
  };

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } h-screen overflow-hidden p-5 pt-8 sticky top-0 overflow-y-visible duration-300 `}
    >
      <div className="flex items-center justify-center h-16 gap-5 mt-10">
        <svg
          width={40}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#000000"
              d="M51.855 169.203C31.677 191.101 21 223.381 21 256s10.677 64.9 30.855 86.797c15.674-.505 44.822-4.243 73.961-11.527 21.772-5.443 43.342-13.134 58.973-21.8-5.558-6.025-8.448-13.975-10.55-22.91a107.81 107.81 0 0 1-1.323-6.603l-58.443 16.697-4.946-17.308 61.588-17.596c-.068-1.912-.115-3.83-.115-5.75s.047-3.838.115-5.75l-61.588-17.596 4.946-17.308 58.443 16.697a107.81 107.81 0 0 1 1.322-6.604c2.103-8.934 4.993-16.884 10.551-22.91-15.631-8.665-37.2-16.356-58.973-21.799-29.14-7.284-58.287-11.022-73.96-11.527zm408.29 0c-15.674.505-44.822 4.243-73.961 11.527-21.772 5.443-43.342 13.134-58.973 21.8 5.558 6.025 8.448 13.975 10.55 22.91.505 2.14.94 4.35 1.323 6.603l58.443-16.697 4.946 17.308-61.588 17.596c.068 1.912.115 3.83.115 5.75s-.047 3.838-.115 5.75l61.588 17.596-4.946 17.308-58.443-16.697a107.81 107.81 0 0 1-1.322 6.604c-2.103 8.934-4.993 16.884-10.551 22.91 15.631 8.665 37.2 16.356 58.973 21.799 29.14 7.284 58.287 11.022 73.96 11.527C480.324 320.899 491 288.619 491 256s-10.677-64.9-30.855-86.797zM256 205c-13.571 0-27.173.992-37.957 2.867-10.784 1.876-18.862 5.678-19.68 6.496-1.878 1.879-4.809 7.578-6.601 15.198C189.969 237.18 189 246.6 189 256c0 9.4.969 18.82 2.762 26.44 1.792 7.619 4.723 13.318 6.601 15.197.818.818 8.896 4.62 19.68 6.496C228.827 306.008 242.429 307 256 307c13.571 0 27.173-.992 37.957-2.867 10.784-1.876 18.862-5.678 19.68-6.496 1.878-1.879 4.809-7.578 6.601-15.198C322.031 274.82 323 265.4 323 256c0-9.4-.969-18.82-2.762-26.44-1.792-7.619-4.723-13.318-6.601-15.197-.818-.818-8.896-4.62-19.68-6.496C283.173 205.992 269.571 205 256 205z"
            ></path>
          </g>
        </svg>
        <span className="text-black text-sm font-normal ">Welcome Admin</span>
      </div>
      <ul className="overflow-y-auto ml-8 mt-5 text-sm font-light">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex-col rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 ${
              Menu.gap ? "mt-9" : "mt-2"
            } ${index === 0 && "bg-light-white"}`}
          >
            {Menu.subtopics ? (
              <div
                className="flex justify-between"
                onClick={() => toggleSubMenu(index)}
              >
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-500 transform`}
                >
                  {Menu.title}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`ml-1 h-4 w-4 text-gray-500 ${
                    openSubmenus.includes(index) ? "transform rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            ) : (
              <Link
                href={`/${Menu.title
                  .replace(/[^a-zA-Z0-9]/g, "")
                  .toLowerCase()}`}
              >
                {Menu.title}
              </Link>
            )}
            {openSubmenus.includes(index) && Menu.subtopics && (
              <ul className="ml-4 flex-col transition-transform duration-300 delay-500">
                {Menu.subtopics.map((subtopic, subIndex) => (
                  <li
                    key={subIndex}
                    className={`mt-5 ${
                      selectedSubtopic === subtopic
                        ? "bg-gray-500 rounded-xl p-2  text-white shadow-lg"
                        : ""
                    }`}
                  >
                    <Link
                      href={`/${Menu.title
                        .replace(/[^a-zA-Z0-9]/g, "")
                        .toLowerCase()}/${subtopic
                        .replace(/[^a-zA-Z0-9]/g, "")
                        .toLowerCase()}`}
                      onClick={() => selectSubtopic(subtopic)}
                    >
                      {subtopic}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
