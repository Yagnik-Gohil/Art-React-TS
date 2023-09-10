import { useRoutes, useLocation } from 'react-router';
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Home from './pages/home';
import NavBar from './components/NavBar';
import Explore from './pages/Explore';
import SellYourArt from './pages/SellYourArt';
import Artists from './pages/Artists';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const location = useLocation();

  // Define your routes using the useRoutes hook
  const element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/explore', element: <Explore /> },
    { path: '/artists', element: <Artists /> },
    { path: '/sell-your-art', element: <SellYourArt /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
  ]);
  
  // Conditionally render NavBar based on the route
  return (
    <Fragment>
      {!['/login', '/signup'].includes(location.pathname) && <NavBar />}
      <Container>{element}</Container>
    </Fragment>
  );
}

export default App;
