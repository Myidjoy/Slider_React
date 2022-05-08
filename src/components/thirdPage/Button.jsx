import React from 'react';

function Button() {
  return (
    <div 
      aria-hidden='true'
      className='third-page-content__text_button'
    >
      <span>Подробнее</span>
      <span className='third-page-content__text_plus'>+</span>
    </div>
  );
};

export default Button;