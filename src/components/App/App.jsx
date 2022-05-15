import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import { Breadcrumb } from 'react-bootstrap';

function App() {
  return (
    <div className='App-header'>
      <h1 className='header'>The Movies Saga!</h1>
      <Router>
        <div className='breadcrumb-container'>
        <Breadcrumb className='breadcrumb'>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
            Movie List
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/details' }}>
            Movie Details
          </Breadcrumb.Item>
        </Breadcrumb>
        </div>

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
