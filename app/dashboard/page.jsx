
import MenuCard from "@/components/DashboardCards";

import React from "react";
const MenuOptions = [
  { name: "Dashboard" },
  { name: "Users" },
  { name: "Settings" },
  { name: "Transaction" },
  { name: "Subscriptions" },
  { name: "CoinStore" },
  { name: "Support" },
  { name: "Withdrawal" },
  { name: "Games" },
  { name: "App Offers" },
  { name: "Daily Offers" },
  { name: "Web Articles" },
  { name: "Promotion Approval" },
  { name: "Offerwall" },
  { name: "VideoZone" },
  { name: "Contest" },
  { name: "Promotion Banner" },
];

const Dashboard = () => {
  return (
    <>
      <div className="bg-none" >
        <div className="flex flex-wrap gap-8 p-8">
          {MenuOptions.map((item, index) => (
            <MenuCard option={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
