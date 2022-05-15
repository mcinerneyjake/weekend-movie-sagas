import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Card } from 'react-bootstrap';

function MovieForm() {
  const dispatch = useDispatch();

  const [title, setNewTitle] = useState([]);
  const [poster, setNewPoster] = useState([]);
  const [description, setNewDescription] = useState([]);

  const addNewMovie = () => {
    dispatch({
      type: 'CREATE_MOVIE',
      payload: { title, poster, description },
    });
  };

  return (
    <Card className='form-card'>
      <Card.Body>
        <Card.Title style={{ color: '#222' }}>Enter a New Movie</Card.Title>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Movie Title</Form.Label>
            <Form.Control
              type='text'
              value={title}
              placeholder='Enter Movie Title'
              onChange={(event) => setNewTitle(event.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Movie Poster</Form.Label>
            <Form.Control
              type='text'
              value={poster}
              placeholder='Enter Movie Poster'
              onChange={(event) => setNewPoster(event.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Movie Description</Form.Label>
            <Form.Control
              type='text'
              value={description}
              placeholder='Enter Movie Description'
              onChange={(event) => setNewDescription(event.target.value)}
            />
          </Form.Group>
        </Form>
        <Button variant='primary' type='submit' onClick={addNewMovie}>
          Submit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieForm;
