const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');
let db;
const dbRequest = indexedDB.open('SotrageDummy', 1);

dbRequest.onupgradeneeded = function (event) {
  db = event.target.result;
  const objStore = db.createObjectStore('products', { keyPath: 'id' });
  objStore.transaction.oncomplete = function (event) {
    const productStore = db
      .transaction('products', 'readwrite')
      .objectStore('products');
    productStore.add({
      id: 'p1',
      title: 'A first prod',
      price: 12.99,
      tags: ['Exensive,Luxury'],
    });
  };
};
dbRequest.onsuccess = function (event) {
  db = event.target.result;
};
dbRequest.onerror = function (event) {
  console.log('Error');
};

storeBtn.addEventListener('click', () => {
  if (db) {
    const productStore = db
      .transaction('products', 'readwrite')
      .objectStore('products');
    productStore.add({
      id: 'p2',
      title: 'A Second prod',
      price: 22.99,
      tags: ['Exensive,Luxury'],
    });
  }
});
retrBtn.addEventListener('click', () => {
  const productStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  const dbRequest = productStore.get('p2');
  dbRequest.onsuccess = function () {
    console.log(dbRequest.result);
  };
});
