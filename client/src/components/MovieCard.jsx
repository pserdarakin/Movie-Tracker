import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../css/MovieCard.css";

function MovieCard({movie}) {

  function onFavoriteClick() {
    alert("clicked")
  }

  return <div className="movie-card">
    <div className="movie-poster">
      <img src={movie.url} alt={movie.title} />
      <div className="movie-overlay">
        <button className="favorite-btn" onClick={onFavoriteClick}>
          ✅
        </button>
      </div>
    </div>
    <div className="movie-info">
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
    </div>
  </div>
  
}

export default MovieCard;


// return (
//   <Card style={{ width: '13rem' }}>
//     {/* <Card.Img variant="top" src="https://www.imdb.com/title/tt0468569/mediaviewer/rm4023877632/?ref_=tt_ov_i" /> */}
//     <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the
//         bulk of the card's content.
//       </Card.Text>
//       <Button variant="primary">Go somewhere</Button>
//     </Card.Body>
//   </Card>
// );