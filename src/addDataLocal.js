const addDataLocal = (id) => {
  let dataLocalStorage = [];

  try {
    dataLocalStorage = JSON.parse(localStorage['favorite-film']);
  } catch (error) {
    dataLocalStorage = 'erorr';
  }

  console.log(dataLocalStorage);

  if (typeof dataLocalStorage != 'object') {
    localStorage.setItem('favorite-film', JSON.stringify([id]));
    console.log(JSON.parse(localStorage['favorite-film']));
  } else {
    dataLocalStorage.push(id);
    localStorage.setItem('favorite-film', JSON.stringify(dataLocalStorage));
  }
};

export default addDataLocal;
