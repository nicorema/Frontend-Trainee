const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => resolve(success),
      error => reject(error),
      opts
    );
  });
  return promise;
};
const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  try {
    const positionData = await getPosition();
    const timer = await setTimer(2000);
    console.log(timer, positionData);
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener('click', trackUserHandler);

Promise.race([getPosition(), setTimer(1000)]).then(data => console.log(data));

Promise.all([getPosition(), setTimer(1000)]).then(data => console.log(data));

Promise.allSettled([getPosition(), setTimer(1000)]).then(data => console.log(data));

// let result = 0;snoop

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
