const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
  const userId = 'u123';
  const userData = { name: 'Nico', age: 24 };
  document.cookie = `uid=${userId}; max-age=300`;
  document.cookie = `userData=${JSON.stringify(userData)}`;
});
retrBtn.addEventListener('click', () => {
  const cookieData = document.cookie.split(';');
  const data = cookieData.map(i => i.trim());
  console.log(data);
});
