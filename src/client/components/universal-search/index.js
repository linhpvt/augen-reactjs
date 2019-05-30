import React, { useRef, useEffect } from 'react';
import './its.css';
const requireFunc = () => console.log('handler not passed');
const UniversalSearch = props => {
  const inputEl = useRef(null);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const term = (inputEl.current.value || '').trim();
    onSubmit(term);
  }
  const { onSubmit = requireFunc } = props;
  useEffect(() => {
    inputEl.current.focus();
  });
  return (
    <div className='universal-search'>
      <form onSubmit={onSubmitHandler}>
        <input ref={inputEl} type="text" placeholder= 'Search...' />
        &nbsp;&nbsp;<input type="submit" value = 'Search' />
      </form>
    </div>
  );
}

export default UniversalSearch;
