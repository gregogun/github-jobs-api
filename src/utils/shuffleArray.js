const shuffle = (array) => {
  let counter = array.length;
  let temp;
  let index;

  if (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return index;
};

export default shuffle;
