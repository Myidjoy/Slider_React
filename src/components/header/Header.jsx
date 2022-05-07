import React from 'react';
// import getElement from '../../helpers/functions';
import { handler } from '../../helpers/functions';

function Header({setPage}) {

  return (
    <header className='header'>
      <div onClick={(event) => {
        event.preventDefault();
        handler(1);
        setPage(1);
      }}
      aria-hidden='true' />
      <figure/>
    </header>
  );
};

export default Header;