import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  return (
    <div className='App'>
      <h1>The Movies Saga!</h1>
      <Router>
        {/* MovieList Component */}
        <Route exact path='/'>
          <MovieList />
        </Route>

        {/* MovieDetails Component */}
        <Route exact path='/details'>
          <MovieDetails />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}

export default App;
