//CONSTS
const VISIBLE_CLASS = 'visible';
const movies = [];

//UI
const startAddMovieBtn = document.querySelector('header button');
const addMovieModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const modalCancel = addMovieModal.querySelector(
  '.modal__actions .btn--passive'
);
const modalAdd = addMovieModal.querySelector('.modal__actions .btn--success');
const modalInputs = addMovieModal.querySelectorAll('input');
const moviesSection = document.getElementById('entry-text');
const movieList = document.getElementById('movie-list');
const deleteMovieModal = document.getElementById('delete-modal');

//FUNCTIONS

const toggleBackdrop = () => backdrop.classList.toggle('visible');

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
};

const removeMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  movieList.children[movieIndex].remove();
  closeMovieDeletionModal();
  updateUI();
};

const startRemoveMovieHandler = (movieId) => {
  deleteMovieModal.classList.add('visible');
  const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');

  let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');  
  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  cancelDeletionButton.removeEventListener('click',closeMovieDeletionModal);

  cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    'click',
    removeMovieHandler.bind(null, movieId)
  );

  toggleBackdrop();
};

const renderMovieElement = (movieData) => {
  const movieElement = document.createElement('li');
  movieElement.classList.add('movie-element');
  movieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${movieData.imageUrl}" alt="${movieData.title}">
    </div>
    <div class="movie-element__info">
        <h2>${movieData.title}</h2>
        <p>${movieData.rating}/5 stars</p>
    </div>
    `;
  movieElement.addEventListener(
    'click',
    startRemoveMovieHandler.bind(null, movieData.id)
  );
  movieList.appendChild(movieElement);
};

const updateUI = () => {
  if (movies.length === 0) {
    moviesSection.style.display = 'block';
  } else {
    moviesSection.style.display = 'none';
  }
};

const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

const clearInputs = (inputs) => {
  for (const input of inputs) {
    input.value = '';
  }
};
const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearInputs(modalInputs);
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  clearInputs(modalInputs);
  toggleBackdrop();
};

const addMovieHandler = () => {
  const title = modalInputs[0].value;
  const imageUrl = modalInputs[1].value;
  const rating = modalInputs[2].value;

  if (
    title.trim() === '' ||
    imageUrl.trim() === '' ||
    rating.trim() === '' ||
    +rating < 1 ||
    +rating > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5.)');
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title,
    imageUrl,
    rating,
  };
  movies.push(newMovie);
  clearInputs(modalInputs);
  toggleBackdrop();
  closeMovieModal();
  updateUI();
  renderMovieElement(newMovie);
};
//LISTENERS
startAddMovieBtn.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
modalCancel.addEventListener('click', cancelAddMovieHandler);
modalAdd.addEventListener('click', addMovieHandler);
