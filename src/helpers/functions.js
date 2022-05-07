const getElement = () => document.getElementById('main');


export const handler = (page) => {
  const element = getElement();
  const width = element.clientWidth * page - element.clientWidth;

  element.scrollTo(width, 0);
};

export default getElement;