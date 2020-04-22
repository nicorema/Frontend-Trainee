//UI
const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');

//Data
const movies = [];

//Functions
const renderMovies = (filterTerm = null) => {
  const movieList = document.getElementById('movie-list');

  if (movies.length > 0) {
    movieList.classList.add('visible');
  } else {
    movieList.classList.remove('visible');
    return;
  }
  movieList.innerHTML = '';

  const filteredMovies = !filterTerm
    ? movies
    : movies.filter(movie => movie.info.title.includes(filterTerm));

  filteredMovies.forEach(movie => {
    const movieElement = document.createElement('li');
    const { info, ...otherProps } = movie;
    let { getFormattedTitle } = movie;
    let text = info.title + ' - ';
    for (key in info) {
      if (key != 'title' && key != '_title') {
        text = text + `${key} : ${info[key]}`;
      }
    }
    movieElement.textContent = text;
    movieList.append(movieElement);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraInfoName = document.getElementById('extra-name').value;
  const extraInfoValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraInfoName.trim() === '' ||
    extraInfoValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      set title(title) {
        this._title = title;
      },
      get title() {
        return this._title.toUpperCase();
      },
      [extraInfoName]: extraInfoValue,
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };
  newMovie.info.title = title;
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

//Listeners
addMovieBtn.addEventListener('click', addMovieHandler);
searchMovieBtn.addEventListener('click', searchMovieHandler);
