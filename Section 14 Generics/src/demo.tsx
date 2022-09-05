const getRandomElement2 = <T,>(list: T[]): T => {
  const randIndx = Math.floor(Math.random() * list.length);
  return list[randIndx];
};
