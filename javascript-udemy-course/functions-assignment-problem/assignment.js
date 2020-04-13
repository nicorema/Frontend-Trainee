const sayHello = (name) => console.log('Hi ' + name);
const sayHello2 = (name, phrase = 'Are you ok?') => {
  console.log('Hi ' + name + ' ' + phrase);
};
const sayHello3 = () => console.log('Hi Nick');
const sayHello4 = (name) => 'Hi ' + name;

const checkInput = (cb, ...strings) => {
  let HasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      HasEmptyText = true;
      break;
    }
  }
  if (!HasEmptyText) {
    cb();
  }
};

sayHello('Nico');
sayHello('Nico', 'How are you');

checkInput(
  () => {
    console.log('No one empty');
  },
  'hello',
  'how',
  'are'
);
