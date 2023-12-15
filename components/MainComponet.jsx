'use client'

import React from "react";
import { useRouter } from "next/navigation";

const MainComponent = () => {
  const router = useRouter();
  let heading = "";

  switch (router.pathname) {
    case "/dashboard":
      heading = "Dashboard";
      break;
    case "/attendence":
      heading = "Attendance";
      break;
    case "/employees":
      heading = "Employees";
      break;
    case "/leaveboard":
      heading = "Leaveboard";
      break;
    case "/payroll":
      heading = "Payroll";
      break;
    case "/taskboard":
      heading = "Taskboard";
      break;
    default:
      heading = "Setting";
  }

  return (
    <main>
      {router.pathname === "/" && <p>Default Content</p>}
      {router.pathname === "/dashboard" && <Dashboard />}
      {router.pathname === "/attendence" && <Attendence />}
      {router.pathname === "/employees" && <Employees />}
      {router.pathname === "/leaveboard" && <Leaveboard />}
      {router.pathname === "/payroll" && <Payroll />}
      {router.pathname === "/taskboard" && <Taskboard />}
    </main>
  );
};

export default MainComponent;
