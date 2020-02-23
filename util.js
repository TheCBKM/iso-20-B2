// const url = 'https://isogst.herokuapp.com/'
const url = 'http://127.0.0.1:3000/'


const getStorage = (item) => (JSON.parse(localStorage.getItem(item)))

const setStorage = (item, data) => (localStorage.setItem(item, JSON.stringify(data)))

const removeStorage = (item) => (localStorage.removeItem(item))