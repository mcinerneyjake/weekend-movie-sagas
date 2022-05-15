import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../Details/MovieDetails';
import MovieForm from '../MovieForm/MovieForm';
import { Navbar, Container, Nav, Breadcrumb } from 'react-bootstrap';

function App() {
  return (
    <div className='App-header'>
      <h1 className='header'>Redux-Saga 2: The SQL</h1>
      <Router>
        <div className='navbar-container'>
          <Navbar bg='primary' variant='dark'>
            <Container>
              <Nav variant='pills' defaultActiveKey='/'>
                <Nav.Link as={Link} to='/'>
                  Movie List
                </Nav.Link>
                <Nav.Link as={Link} to='/details'>
                  Movie Details
                </Nav.Link>
                <Nav.Link as={Link} to='/form'>
                  Enter a New Movie
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
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
        <Route exact path='/form'>
          <MovieForm />
        </Route>
      </Router>
    </div>
  );
}

export default App;
