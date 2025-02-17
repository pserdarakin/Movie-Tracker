import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SearchBar() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Add to your list</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input type="text" placeholder='Search for the movie..' />
        </Modal.Body>

        <Modal.Footer>

        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default SearchBar;