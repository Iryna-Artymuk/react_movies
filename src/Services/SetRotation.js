export const setRotationPlus = () => {
  const deg = Math.random() * 10 + 10;
  // console.log(' deg : ', deg);
  return 'rotateY(' + deg + 'deg) rotateX(' + deg + 'deg)';
};

export const setRotationMinus = () => {
  const deg = Math.random() * 10 + 10;
  // console.log(' deg : ', deg);
  return 'rotateY(' + -deg + 'deg) rotateX(' + -deg + 'deg)';
};
