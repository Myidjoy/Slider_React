import React from 'react';
import FirstPage from '../firstPage/FirstPage';

function Page({name, id, changePage}) {
  
  return (
    <section className={name}>
      {
        id === 1
          ? <FirstPage changePage={changePage}/>:
          null
      }
    </section>
  );
};

export default Page;