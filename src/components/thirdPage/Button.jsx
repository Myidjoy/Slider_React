import React from 'react';

function Button({status, changeStatus}) {

  return (
    !status
      ? (
        <div 
          onClick={(event) => {
            event.stopPropagation();
            changeStatus(!status);
            
          }}
          aria-hidden='true'
          className='third-page-content__text_button'
        >
          <span>Подробнее</span>
          <span className='third-page-content__text_plus'>+</span>
        </div>): 
      null
  );
};

export default Button;