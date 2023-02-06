import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";

function MovieCard({movie}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.imageUrl} style={{width:'18rem',height:'500px'}} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}<br></br>
          {movie.creatAt}<br></br>
          <ReactStars
       count={5}
       size={24}
       activeColor="#ffd700"
       value={movie.Rating}
  />
        </Card.Text>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;