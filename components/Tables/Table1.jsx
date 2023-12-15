'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import userImage from '/public/images/user/user-02.png'
const Table1 = ({ columns, data, entriesPerPageDefault = 20 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(entriesPerPageDefault);
  const [searchTerm, setSearchTerm] = useState('');

  // Convert column names to lowercase and remove special characters and spaces
  const formattedColumns = columns.map(column =>
    column.replace(/\s/g, '').toLowerCase()
  );

  const formattedData = data.map(item => {
    const formattedItem = {};
    Object.keys(item).forEach(key => {
      const formattedKey = key.replace(/\s/g, '').toLowerCase();
      formattedItem[formattedKey] = item[key];
    });
    return formattedItem;
  });

  const filteredData = formattedData.filter(item =>
    formattedColumns.some(
      column =>
        typeof item[column] === 'string' &&
        item[column].toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSubmit = e => {
    e.preventDefault();
  };

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className="mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex justify-end p-4 gap-2 items-center"
      >
        <input
          className="border p-2 mt-2 hover:border "
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4  text-sm h-12 rounded"
        >
          Submit
        </button>
      </form>

      <table className="w-full    border-none mt-8">
        <thead>
          <tr>
            {columns.map((filteredColumn, index) => (
              <th key={index} className="p-2 font-thin text-sm">
                {filteredColumn}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentEntries.map((entry, rowIndex) => (
            <tr key={rowIndex}>
              {formattedColumns.map((column, colIndex) => (
                <td key={colIndex} className="border-y-[0.5px] font-thin p-2 max-w-[200px] overflow-hidden overflow-ellipsis">
                  {column === 'photo' ? (
                    <Image
                      width={100}
                      height={100}
                      src={userImage}
                      alt="User's Photo"
                      style={{ width: '50px', height: '50px' }}
                    />
                  ) : (
                    <div title={entry[column]}>{entry[column]}</div>
                  )}
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
              currentPage === index + 1 ? 'bg-green-600' : ''
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Table1;