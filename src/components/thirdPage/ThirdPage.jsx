import React from 'react';
import PicturesThird from '../pictures/PicturesThird';
import Button from './Button';
import Menu from './Menu';
import Tables from './Tables';
import TopText from './TopText';

function ThirdPage() {
  const [status, setStatus] = React.useState(false);

  return (
    <section className='third-page-content'>
      <TopText/>
      <Tables/>
      <Button status={status} changeStatus={setStatus}/>
      <PicturesThird/>
      {
        status
          ?<Menu status={status} changeStatus={setStatus}/>:
          null
      }
    </section>
  );
};

export default ThirdPage;