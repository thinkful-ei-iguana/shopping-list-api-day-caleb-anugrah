/* eslint-disable indent */
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/caleb';

const getItems = function () {
  return fetch(`${BASE_URL}/items`)
};

const createItem = function (name) {
  let newItem = {
    name: name
  };

  let newItemJSON = JSON.stringify(newItem);
  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      },
    body: newItemJSON
  });
}

export default {
  getItems,
  createItem
};