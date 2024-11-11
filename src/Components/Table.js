import React from 'react';

export default function Table(props) {
  const { data, column } = props;

  return (
    <div className="overflow-x-auto bg-[#1F2933] px-4 py-6"> {/* Dark gray background for table wrapper */}
      <table className="min-w-full border-collapse border border-gray-600 shadow-lg">
        <thead>
          <tr className="bg-[#334155] text-[#E5E7EB] uppercase text-sm tracking-wide"> {/* Cool gray header */}
            {column.map((col, i) => (
              <th key={i} className="py-3 px-6 border-b border-gray-700 font-semibold">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className={`${
                i % 2 === 0 ? 'bg-[#2D3748]' : 'bg-[#27303B]'
              } hover:bg-[#3b4c63] transition-colors duration-150`} /* Subtle blue-gray alternating rows with darker hover */
            >
              {column.map((col, colInd) => (
                <td key={colInd} className="py-3 px-6 border-b border-gray-700 text-[#F7FAFC]">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
