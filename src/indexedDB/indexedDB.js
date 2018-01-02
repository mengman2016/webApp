//todo
const request = window.indexedDB.open('webAppDatabase');

request.onerror = function (event) {
    console.log(event)
}

request.onsuccess = function (event) {
    console.log(event)
}