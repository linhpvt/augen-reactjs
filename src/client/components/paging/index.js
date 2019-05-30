import React from 'react';
import './style.css';
const Paging = props => {
  const { currentPage, pageSize, total = 0, onPageNumClick } = props;
  let pageNumbers = Math.ceil(total / pageSize);
  const pages = [];
  for (let i = 0; i < pageNumbers; i++ ) {
    pages.push(i + 1);
  }
  if (currentPage === 0) return '';
  return (
    <div className="paging">
      {pages.map((val, ind) => {
        return val === currentPage ?
          (<span key={ind} className="current-page">{val}</span>) :
          (<span key={ind} onClick={() => { onPageNumClick(val) }} >{val}</span>);
        })
      }
    </div>
  );
}
export default Paging;
