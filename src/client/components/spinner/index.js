import React from 'react';
import'./style.css';
const Spinner = ({ row = {} }) => {
  const keys = Object.keys(row);
  return (
    <div class="loader"></div>
  );
}
export default Spinner;
