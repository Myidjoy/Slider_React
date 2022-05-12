import React, { useState } from 'react';
import MenuFirstPage from './MenuFirstPage';
import MenuSecondPage from './MenuSecondPage';

function Menu({status, changeStatus}) {
  const [page, setPage] = useState(1);

  const buttonHandler = (slide) => {
    const newPage = page + slide;
    
    if (newPage > 2) {
      return null;
    }
    if (newPage < 1) {
      return null;
    }
    setPage(newPage);
    return null;
  };
  return (
    <section className='menu'>
      <div className='menu__wrapper-page'>
        {
          page === 1 && <MenuFirstPage/>
        }
        {
          page === 2 && <MenuSecondPage/>
        }
        <div className='menu_buttons'>
          <button onClick={() => { buttonHandler(-1);}} type='button'>&#60;</button>
          <span style={
            page === 1 ? {background: '#fc6da9', border: 'none'}: null
          }/>
          <span style={
            page === 2 ? {background: '#fc6da9', border: 'none'}: null
          }/>
          <button onClick={() => { buttonHandler(1);}} type='button'>&#62;</button>
        </div>
      </div>
      <button onClick={(event) => {
        event.stopPropagation();
        changeStatus(!status);
      }} type='button'>&#215;</button>
      
    </section>
  );
};

export default Menu;