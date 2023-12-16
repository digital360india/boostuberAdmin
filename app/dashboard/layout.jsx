"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

// Call Inter at the module scope and assign it to a constant
const interStyles = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Use the assigned constant in the global styles */}
        <style jsx global>{`
          ${interStyles}
        `}</style>
      </head>
      <body>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 h-screen">
            <Navbar />
            <div className="mt-40 ml-10 mr-10">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
