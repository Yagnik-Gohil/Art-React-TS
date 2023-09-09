import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {BiUser, BiHeart} from 'react-icons/bi';
import {BsCart} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Container fluid className="d-flex justify-content-between p-2 border-bottom">
      <div>
        <NavLink className="lh-32 mx-2" to="/">ART MART</NavLink>
      </div>
      <Nav className="justify-content-center">
        {/* <Nav.Item className='mx-4'> */}
          <NavLink className='mx-4 lh-32' to="/explore">EXPLORE</NavLink>
        {/* </Nav.Item> */}
        {/* <Nav.Item className='mx-4'> */}
          <NavLink className='mx-4 lh-32' to="/artists">ARTISTS</NavLink>
        {/* </Nav.Item> */}
        {/* <Nav.Item className='mx-4'> */}
          <NavLink className='mx-4 lh-32' to="sell-your-art">SELL YOUR ART</NavLink>
        {/* </Nav.Item> */}
      </Nav>
      <div>
        <BiHeart size={28} className='mx-2'></BiHeart>
        <BsCart size={28} className='mx-2'></BsCart>
        <BiUser size={28} className='mx-2'></BiUser>
      </div>
    </Container>
  );
}

export default NavBar;
