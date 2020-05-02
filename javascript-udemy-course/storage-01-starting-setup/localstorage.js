const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u12345';
const user = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
};

storeBtn.addEventListener('click', () => {
  sessionStorage.setItem('userId', userId);
  localStorage.setItem('user', JSON.stringify(user));
});
retrBtn.addEventListener('click', () => {
  const uid = sessionStorage.getItem('userId');
  const user = JSON.parse(localStorage.getItem('user'));
  if (uid) {
    console.log('Got The ID - ' + uid);
    console.log(user);
  } else {
    console.log('Could not find id');
  }
});
