import React from 'react';
import PicturesSecond from '../pictures/PicturesSecond';

function SecondPage({page}) {
  
  return (
    <section className='second-page-content'>
      <PicturesSecond page={page}/>
      <span className='second-page-content__text_header'>ТЕКСТ<br/> СООБЩЕНИЯ</span>
      <section 
        onTouchEnd={(event) => {
          event.stopPropagation();
        }}
        onTouchMove={(event) => {
          event.stopPropagation();
        }}
        className='second-page-content__text'>      
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam harum, nostrum ipsam ipsa incidunt tenetur odio laboriosam. Cupiditate ducimus reiciendis facere doloremque. Itaque eligendi, veniam magnam illo reprehenderit natus quisquam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam harum, nostrum ipsam ipsa incidunt tenetur odio laboriosam. Cupiditate ducimus reiciendis facere doloremque. Itaque eligendi, veniam magnam illo reprehenderit natus quisquam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam harum, nostrum ipsam ipsa incidunt tenetur odio laboriosam. Cupiditate ducimus reiciendis facere doloremque. Itaque eligendi, veniam magnam illo reprehenderit natus quisquam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam harum, nostrum ipsam ipsa incidunt tenetur odio laboriosam. Cupiditate ducimus reiciendis facere doloremque. Itaque eligendi, veniam magnam illo reprehenderit natus quisquam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam harum, nostrum ipsam ipsa incidunt tenetur odio laboriosam. Cupiditate ducimus reiciendis facere doloremque. Itaque eligendi, veniam magnam illo reprehenderit natus quisquam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam harum, nostrum ipsam ipsa incidunt tenetur odio laboriosam. Cupiditate ducimus reiciendis facere doloremque. Itaque eligendi, veniam magnam illo reprehenderit natus quisquam.</p>
      </section>
    </section>
  );
};

export default SecondPage;