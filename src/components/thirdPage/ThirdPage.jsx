import React from 'react';
import PicturesThird from '../pictures/PicturesThird';
import Button from './Button';
import Tables from './Tables';
import TopText from './TopText';

function ThirdPage() {
  return (
    <section className='third-page-content'>
      <TopText/>
      <Tables/>
      <Button/>
      <PicturesThird/>
    </section>
  );
};

export default ThirdPage;