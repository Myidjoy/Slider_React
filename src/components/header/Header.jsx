import React from 'react';
import { handler } from '../../helpers/functions';

function Header({setPage}) {

  return (
    <header className='header'>
      <div onClick={() => {
        handler(1);
        setPage(1);
      }}
      aria-hidden='true' />
      <figure/>
    </header>
  );
};

export default Header;