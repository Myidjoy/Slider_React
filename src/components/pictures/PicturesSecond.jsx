import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

const durationStart = 2100;
const durationEnd = 350;

function PicturesSecond({page}) {
  const [animationStart, setAnimationStart] = useState(false);

  useEffect(() => {
    if(page === 2 ) {
      setAnimationStart(!animationStart);
    } else {
      setAnimationStart(false);
    }
  },[page]);

  return (
    <section className='second-page-content__pictures'>
      <Transition in={animationStart} timeout={{
        enter: durationStart,
        exit: durationEnd
      }}>
        {
          state => (
            <figure className={`second-page-content__image_1 second-page-content__image_1_${state}`}/>
          )
        }
      </Transition>
      <Transition in={animationStart} timeout={{
        enter: durationStart,
        exit: durationEnd
      }}>
        {
          state => (
            <figure className={`second-page-content__image_2 second-page-content__image_2_${state}`}/>
          )
        }
      </Transition>
      <Transition in={animationStart} timeout={{
        enter: durationStart,
        exit: durationEnd
      }}>
        {
          state => (
            <figure className={`second-page-content__image_3 second-page-content__image_3_${state}`}/>
          )
        }
      </Transition>
      <Transition in={animationStart} timeout={{
        enter: durationStart,
        exit: durationEnd
      }}>
        {
          state => (
            <figure className={`second-page-content__image_4 second-page-content__image_4_${state}`}/>
          )
        }
      </Transition>
      <Transition in={animationStart} timeout={{
        enter: durationStart,
        exit: durationEnd
      }}>
        {
          state => (
            <figure className={`second-page-content__image_5 second-page-content__image_5_${state}`}/>
          )
        }
      </Transition>
    </section>
  );
};

export default PicturesSecond;