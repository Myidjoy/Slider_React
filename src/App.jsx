import React, { useEffect, useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Page from './components/page/Page';
import getElement from './helpers/functions';

function App({
  setCurrentPage,
  renderPages,
  scrollCheck,
  setPositionX,
  setPosition,
  position,
  positionX
}) {      
  
  return (
    <main 
      onScroll={() => null}
      onTouchStart={(event) => {         
        setPositionX(Math.round(event.touches[0].clientX));
      }}
      onTouchMove={(event) => {         
        setPosition(Math.round(event.targetTouches[0].clientX));                
      }}
      onTouchEnd={() => {        
        scrollCheck(positionX, position);
        setPosition(0);                
      }}
      id='main'
      className='main-content'
    >
      <Header setPage={setCurrentPage}/>
      {renderPages}
      <Footer/>
    </main>    
  );
}

const wrapperApp = Component => function({pages}) {
  const [pagesCount, setPagesCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [widthClient, setWidthClient] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [positionX, setPositionX] = useState(0);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const element = getElement();
    
    setWidthClient(element.clientWidth);
    setScrollWidth(element.scrollWidth);
    setPagesCount(pages.length);
  });

  const currentPages = pages.map((page) => (
    <Page 
      key={page.id} 
      name={page.name} 
      id={page.id} 
      changePage={setCurrentPage} 
      page={currentPage}
    /> 
  )
  );
  
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

  return <Component 
    setCurrentPage={setCurrentPage}
    position={position}
    positionX={positionX}
    setPosition={setPosition}
    renderPages={currentPages}
    scrollCheck={scrollCheck}
    setPositionX={setPositionX}
  />;
};

const newApp = wrapperApp(App);

export default newApp;
