function getRandomNumber (max, min) {
  return Math.round(Math.random() * (+max - +min + 1) + min);
}

function getUniqRandomNumber (max, min, arr) {
  let current = Math.random() * (+max - +min + 1) + min;
  while (arr.includes(current)){
    current = Math.random() * (+max - +min + 1) + min;
  }
  arr.push(current);
  return Math.round(current);
}

function closeFullPhoto(openedWindow) {
  openedWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

export {getRandomNumber, getUniqRandomNumber, closeFullPhoto};
