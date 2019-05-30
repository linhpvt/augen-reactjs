import * as API from '../../api-caller';
import UniversalSearch from '../../components/universal-search';

import React, { useEffect, useState } from 'react';
import TableRow from '../../components/table-row';
import TableHeader from '../../components/table-header';
import Paging from '../../components/paging';
import Spinner from '../../components/spinner';
import './contact.css';
const PageSize = 7;
const renderContact = (contactList = []) => contactList.map((contact, ind) => <TableRow key={ind} row={contact} />);
const buildReqUrl = (term, pageNumber) => `/api/contacts/search?term=${term}&pageNumer=${pageNumber}&pageSize=${PageSize}`;
const Contact = () => {
  const [contactList, setContactList] = useState();
  const [term, setTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(10);
  const [loading, setLoading] = useState('');
  const onPageNumClick = async (pageNumber) => {
    const url = buildReqUrl(term, pageNumber);
    setLoading('Searching data ...');
    try {
      const resp = await API.get(url, { accept: 'application/json' });
        const { code, data: { total = 0, result = [] } = {} } = resp;
      if (code === 0) {
        setContactList(result);
        setTotal(total);
        setCurrentPage(pageNumber);
      }
      setLoading('');
    }catch(e){
      console.log(e);
      setLoading('');
    };  
  }
  const onSubmit = async (term) => {
    // store term for paging
    setTerm(term);
    setLoading('Searching data ...');
    const url = buildReqUrl(term, 1);
    try {
      const resp = await API.get(url, { accept: 'application/json' });
        const { code, data: { total = 0, result = [] } = {} } = resp;
      if (code === 0) {
        setContactList(result);
        setTotal(total);
        setCurrentPage(1);
      }
      setLoading('');
    }catch(e){
      console.log(e);
      setLoading('');
    };
  } 
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading('Searching data ...');
        const url = buildReqUrl(term, currentPage);
        const resp = await API.get(url, { accept: 'application/json' });
        const { code, data: { total = 0, result = [] } = {} } = resp;
        if (code === 0) {
          setContactList(result);
          setTotal(total);
          setCurrentPage(1);
        }
        setLoading('');
      }catch(e){
        console.log(e);
        setLoading('');
      };
    }
    fetchData();
  }, []);
  const headerTitles = ['First Name', 'Last Name', 'Phone','Email'];
  return (
    <div className='App'>
      <UniversalSearch onSubmit={onSubmit} />
      <div className="header">Contact List</div>
      {loading && <Spinner />}
      <table>
        <tbody>
          <TableHeader headerTitles={headerTitles} />
          { contactList ? 
            contactList.length === 0
              ? 'Contact not found' 
              : renderContact(contactList)
            : 'Loading ...'
          }
        </tbody>
      </table>
      <Paging
        currentPage={currentPage}
        pageSize={PageSize}
        total={total}
        onPageNumClick={onPageNumClick}
      />
      {/* <div>Paging ...</div> */}
    </div>
  );
}

export default Contact;
