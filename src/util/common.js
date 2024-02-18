function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function updateItem(items, update) {
  return items.map((el) => el[0].id === update[0].id ? update : el);
}

export{getRandomElement, updateItem};
