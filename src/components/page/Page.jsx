import React from 'react';
import FirstPage from '../firstPage/FirstPage';
import SecondPage from '../secondPage/SecondPage';

function Page({name, id, changePage}) {
  
  return (
    <section className={name}>
      {
        id === 1
          ? <FirstPage changePage={changePage}/>:
          id === 2
            ? <SecondPage/>: 
            null
      }
    </section>
  );
};

export default Page;