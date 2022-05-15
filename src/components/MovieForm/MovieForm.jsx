import { Button, Form } from 'react-bootstrap';

function MovieForm() {

    

  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>Movie Title</Form.Label>
        <Form.Control type='text' placeholder='Enter Movie Title' />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Movie Poster</Form.Label>
        <Form.Control type='text' placeholder='Enter Movie Poster' />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Movie Description</Form.Label>
        <Form.Control type='text' placeholder='Enter Movie Description' />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default MovieForm;
