import React from 'react';
import { Button, Card } from 'react-bootstrap';

function MovieCard({ movie }) {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img style={{ width: '285px'}} variant="top" src={movie.posterURL} />
          <Card.Body>
            <Card.Title style={{ width: '285px'}}>{movie.title}</Card.Title>
            <Card.Text>{movie.description}
            </Card.Text>
            <Button variant="primary">{movie.rating}</Button>
          </Card.Body>
        </Card>
      );
    }

export default MovieCard