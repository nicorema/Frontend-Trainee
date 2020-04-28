// const buttons = document.querySelectorAll('button');

// const buttonClickHandler = () => {
//   console.log(event);
// };

// const anotherButtonClickHandler = () => {
//   console.log('This was clicked');
// };

// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', event => console.log(event));

const form = document.querySelector('form');
const button = document.querySelector('button');
const div = document.querySelector('div');

form.addEventListener('submit', event => {
  console.log(event);
  event.preventDefault();
});

div.addEventListener('click', event => {
  console.log('Div Clicked');
  console.log(event);
});
button.addEventListener('click', event => {
  event.stopPropagation();
  console.log('Btn Clicked');
  console.log(event);
});

const list = document.querySelector('ul');

list.addEventListener('click',event=>{
    event.target.closest('li').classList.toggle('highlight');
    form.submit();
})

