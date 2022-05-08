import React from 'react';
import FirstPage from '../firstPage/FirstPage';
import SecondPage from '../secondPage/SecondPage';
import ThirdPage from '../thirdPage/ThirdPage';

function Page({name, id, changePage, page}) {
  
  return (
    <section className={name}>
      {
        id === 1
          ? <FirstPage changePage={changePage}/>:
          id === 2
            ? <SecondPage page={page}/>: 
            id === 3
              ? <ThirdPage/>:
              null
                  
      }
    </section>
  );
};

export default Page;