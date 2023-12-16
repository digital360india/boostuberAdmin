"use client";
import Table1 from "@/components/Tables/Table1";
import { useState, useEffect } from "react";
import axios from "axios";
const columns = [
  "USER ID",
  "REFERRAL ID",
  "FROM REFERRAL ID",
  "PHOTO",
  "NAME",
  "EMAIL",
  "COIN",
  "COUNTRY",
  "IP ADDRESS",
  "ACCOUNT STATUS",
  "CREATION DATE",
  "ACTION",
];

const Users = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get("http://localhost:8080/user")
          .then((res) => {
            setUserData(res?.data);
          });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="p-0 ">
      <div className="text-xl">All Users</div>
      <Table1 columns={columns} data={userData} />
    </div>
  );
};
export default Users;
