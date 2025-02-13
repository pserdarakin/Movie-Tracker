import React from "react";
import Header from "./Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return (
    <Container fluid className="bg-dark text-white p-3">
      <Row className="align-items-center">
        <Col className="d-flex gap-3" md={4}>
          <button>Watched List</button>
          <button>Wanted List</button>
        </Col>
        <Col className="text-center" md={4}>
          <h1>Movie App</h1>
        </Col>
        <Col className="d-flex justify-content-end gap-3" md={4}>
          <button>Login</button>
          <button>Signup</button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;