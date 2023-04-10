import {Link} from 'react-router-dom';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Navbar(){

    return(
        <NavBar bg='dark' variant='dark'>
            <Container>
                <NavBar.Brand href='/'>Navbar</NavBar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/FavList'>Favorites</Nav.Link>
                </Nav>
            </Container>
        </NavBar>
    );
}