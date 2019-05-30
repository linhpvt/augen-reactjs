import React from 'react';
const TableRow = ({ row = {} }) => {
  const keys = Object.keys(row);
  return (
    <tr>
      {keys.map((key, idx) => (<td key={idx}>{row[key]}</td>))}
    </tr>
  );
}
export default TableRow;
