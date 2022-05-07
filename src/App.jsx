import React, { useEffect, useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Page from './components/page/Page';
import getElement from './helpers/functions';

function App() {
  const pages = [
    {id: 1, name: 'main-content__page main-content__page_first-page'}, 
    {id: 2, name: 'main-content__page main-content__page_second-page'}, 
    {id: 3, name: 'main-content__page main-content__page_third-page'}
  ];
        
  const [pagesCount, setPagesCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [widthClient, setWidthClient] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [positionX, setPositionX] = useState(0);
  const [position, setPosition] = useState(0);

  const checkPageRight = (nextPage) => {
    if(currentPage + nextPage <= pagesCount) {
      const width = widthClient * currentPage;
      const newPage = currentPage + nextPage;

      setCurrentPage(newPage);

      return width;
    } 

    return scrollWidth - widthClient;
  };

  const checkPageLeft = (nextPage) => {
    if(currentPage + nextPage >= 1) {
      const width = widthClient * ((currentPage + nextPage) + nextPage);
      const newPage = currentPage + nextPage;

      setCurrentPage(newPage);

      return width;
    }

    return widthClient - widthClient;
  };

  const scrollCheck= (oldPositionX, distance) => {
    if(distance) {
      const difference = oldPositionX - distance;
      
      if (difference > 0) {
        const element = getElement();

        element.scrollTo(checkPageRight(1), 0);
      } 

      if (difference < 0) {
        const element = getElement();
  
        element.scrollTo(checkPageLeft(-1), 0);
      } 
    } 
  };

  useEffect(() => {
    const element = getElement();
    
    setWidthClient(element.clientWidth);
    setScrollWidth(element.scrollWidth);
    setPagesCount(pages.length);
  }, []);

  return (
    <main 
      onScroll={() => null}
      onTouchStart={(event) => {         
        setPositionX(Math.round(event.touches[0].clientX));
      }}
      onTouchMove={(event) => {         
        setPosition(Math.round(event.targetTouches[0].clientX));                
      }}
      onTouchEnd={(event) => {        
        scrollCheck(positionX, position);
        setPosition(0);                
      }}
      id='main'
      className='main-content'
    >
      <Header setPage={setCurrentPage}/>
      {pages.map((page) => <Page key={page.id} name={page.name} id={page.id} changePage={setCurrentPage} /> )}
      <Footer/>
    </main>    
  );
}

export default App;
