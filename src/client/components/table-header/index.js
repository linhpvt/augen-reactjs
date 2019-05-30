import React from 'react';
const TableHeader = props => {
  const { headerTitles = [] } = props;
  return (
    <tr>
      {headerTitles.map((title, idx) => (<th key={idx}>{title}</th>))}
    </tr>
  );
}
export default TableHeader;
