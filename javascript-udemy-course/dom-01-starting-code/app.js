const section = document.querySelector('section');
const button = document.querySelector('button');
//section.style.backgroundColor = 'blue';

section.className = 'red-bg';

button.addEventListener('click', () => {
  section.classList.toggle('invisible');
});
