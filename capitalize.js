const capitalize = (str) => {
  if (str === '') return '';

  return str.at(0) + str.slice(1);
};

export default capitalize;
