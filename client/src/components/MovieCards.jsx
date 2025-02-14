import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCards() {
  return (
    <Card style={{ width: '13rem' }}>
      {/* <Card.Img variant="top" src="https://www.imdb.com/title/tt0468569/mediaviewer/rm4023877632/?ref_=tt_ov_i" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCards;