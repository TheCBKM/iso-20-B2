const url = 'https://isogst.herokuapp.com/'
// const url = 'http://127.0.0.1:3000/'

function logout(){
    localStorage.clear()
    window.location.href="index.html"
}

function track(id){
setStorage("trackid",id)
window.location.href="track.html"
}
const getStorage = (item) => (JSON.parse(localStorage.getItem(item)))

const setStorage = (item, data) => (localStorage.setItem(item, JSON.stringify(data)))

const removeStorage = (item) => (localStorage.removeItem(item))

