"use client"
import React, { useState } from "react";
import SearchUser from "./Search";

const Table2 = ({ columns, data, entriesPerPageDefault = 20 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(entriesPerPageDefault);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mx-auto">
      <SearchUser onSearch={setSearchTerm} />

      {searchTerm && (
        <div>
          <table className="w-full   border-none mt-8">
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th key={index} className="p-2 font-thin text-sm">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentEntries.map((entry, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className="border-y-[0.5px]  font-thin p-2">
                      {entry[column.toLowerCase()]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-3 py-2 bg-green-500 text-white border rounded ${
                  currentPage === index + 1 ? "bg-green-600" : ""
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Table2;
