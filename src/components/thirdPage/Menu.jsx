import React from 'react';

function Menu({status, changeStatus}) {
  return (
    <section className='menu'>
      <div/>
      <button onClick={(event) => {
        event.stopPropagation();
        changeStatus(!status);
      }} type='button'>&#215;</button>
    </section>
  );
};

export default Menu;