import React from 'react';

function PicturesSecond() {
  
  return (
    <section className='second-page-content__pictures'>
      <figure className='second-page-content__image_1'/>
      <figure className='second-page-content__image_2'/>
      <figure className='second-page-content__image_3'/>
      <figure className='second-page-content__image_4'/>
      <figure className='second-page-content__image_5'/>
    </section>
  );
};
const getAllFigure = () => document.querySelectorAll('.second-page-content__pictures figure');

const wrapperPicturesSecond = Component => function({page}) {
  if(page === 2) {
    getAllFigure().
      forEach(element => element.classList.add('active'));
  } else {
    getAllFigure().
      forEach(element => element.classList.remove('active'));
  }

  return <Component/>;
};

const HOC = wrapperPicturesSecond(PicturesSecond);
export default HOC;