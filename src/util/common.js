function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function updateItem(items, update) {
  return items.map((el) => el.id === update.id ? update : el);
}

export{getRandomElement, updateItem};
