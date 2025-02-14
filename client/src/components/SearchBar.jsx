import React from "react";
import { Container, Row } from 'react-bootstrap';

function SearchBar(){
    return (
        <Container>
            <Row>
                <input type="Search" placeholder="Search the movie" />
            </Row>

            <Row>
                <button>Add to the List</button>
            </Row>
        </Container>
    );
}

export default SearchBar;