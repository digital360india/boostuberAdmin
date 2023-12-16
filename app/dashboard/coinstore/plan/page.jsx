import Table1 from "@/components/Tables/Table1";
import React from "react";

const bogousValues = [
  {
    SELECT: false,
    PACKAGE: "Basic",
    "PACKAGE ID": "PKG001",
    AMOUNT: 9.99,
    COIN: 100,
    COUNTRY: "USA",
    STATUS: "Active",
  },
  {
    SELECT: false,
    PACKAGE: "Premium",
    "PACKAGE ID": "PKG002",
    AMOUNT: 19.99,
    COIN: 250,
    COUNTRY: "Canada",
    STATUS: "Pending",
  },
  {
    SELECT: false,
    PACKAGE: "Pro",
    "PACKAGE ID": "PKG003",
    AMOUNT: 29.99,
    COIN: 500,
    COUNTRY: "UK",
    STATUS: "Completed",
  },
  {
    SELECT: false,
    PACKAGE: "Gold",
    "PACKAGE ID": "PKG004",
    AMOUNT: 49.99,
    COIN: 1000,
    COUNTRY: "Australia",
    STATUS: "Inactive",
  },
  {
    SELECT: false,
    PACKAGE: "Silver",
    "PACKAGE ID": "PKG005",
    AMOUNT: 39.99,
    COIN: 750,
    COUNTRY: "Germany",
    STATUS: "Pending Approval",
  },
];

const page = () => {
  return (
    <div className="p-0 ">
      <div className="text-xl">Plans</div>
      <Table1 columns={Object.keys(bogousValues[0])} data={bogousValues} />
    </div>
  );
};

export default page;
