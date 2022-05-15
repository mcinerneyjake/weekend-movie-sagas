import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function.
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('FETCH_MOVIE', fetchSingleMovie);
  yield takeEvery('FETCH_GENRES', fetchGenres);
  yield takeEvery('CREATE_MOVIE', createMovie);
}

function* fetchAllMovies() {
  // GET all movies from the DB.
  try {
    const movies = yield axios.get('/api/movie/');
    console.log('get all:', movies.data);
    yield put({ type: 'SET_MOVIES', payload: movies.data });
  } catch {
    console.log('get all movies error');
  }
}

function* fetchSingleMovie(action) {
  // GET an individual movie from the DB.
  try {
    const movie = yield axios.get(`/api/movie/${action.payload}`);
    console.log('get one movie:', movie.data);
    yield put({ type: 'SET_MOVIE', payload: movie.data });
  } catch {
    console.log('get movie error');
  }
}

function* fetchGenres(action) {
  // GET all genres for an individual movie from the DB.
  try {
    const genres = yield axios.get(`/api/genre/${action.payload}`);
    console.log('get one genre:', genres.data);
    yield put({ type: 'SET_GENRES', payload: genres.data });
  } catch {
    console.log('get genres error');
  }
}

function* createMovie(action) {
  console.log('createMovie action.payload is', action.payload);
  const response = yield axios({
    method: 'POST',
    url: '/api/movie',
    data: action.payload,
  });
  console.log('createMovie response is:', response);
  yield put({
    type: 'FETCH_MOVIES',
  });
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server.
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

// Used to store an individual movie.
const movie = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIE':
      return action.payload;
    default:
      return state;
  }
};

// Used to store an individual movie's genres.
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use.
const storeInstance = createStore(
  combineReducers({
    movies,
    movie,
    genres,
  }),
  // Add sagaMiddleware to our store.
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware.
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
