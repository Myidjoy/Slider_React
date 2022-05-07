import React from 'react';
import { handler } from '../../helpers/functions';
import Pictures from '../pictures/Pictures';

function FirstPage({changePage}) {
  return (
    <section className='first-page-content'>  
      <Pictures/>
      <section className='first-page-content__text'>
        <span className='first-page-content__text first-page-content__text_hello'>ПРИВЕТ,</span>
        <ul className='first-page-content__text first-page-content__text_info'>
          <li>ЭТО <span>НЕ</span></li>
          <li>КОММЕРЧЕСКОЕ</li>
          <li>ЗАДАНИЕ 
            <div 
              aria-hidden='true'
              onClick={() => {                
                handler(2);              
                changePage(2);
              }} 
              className='first-page-content__text_button'
            >
              <span>Что дальше ?</span>
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default FirstPage;