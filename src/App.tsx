import { Route, Routes } from 'react-router';
import Home from './pages/home';
import { Fragment } from 'react';
import NavBar from './components/NavBar';
import Explore from './pages/Explore';
import SellYourArt from './pages/SellYourArt';
import Artists from './pages/Artists';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/artists" element={<Artists />}></Route>
          <Route path="/sell-your-art" element={<SellYourArt />}></Route>
        </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
