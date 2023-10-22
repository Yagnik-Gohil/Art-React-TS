import { useRoutes, useLocation } from 'react-router';
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Explore from './pages/Explore';
import SellYourArt from './pages/SellYourArt';
import Artists from './pages/Artists';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import VerifyEmail from './pages/VerifyEmail';
import Profile from './pages/Profile';
import MyCart from './components/MyCart';
import Dashboard from './components/MyProfile';
import History from './components/History';
import Product from './pages/Product';
import Address from './components/Address';



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
    { path: '/verify-email', element: <VerifyEmail /> },
    {
      path: '/profile',
      element: <Profile />,
      children: [
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'address', element: <Address /> },
        { path: 'mycart', element: <MyCart /> },
        { path: 'history', element: <History />},
      ],
    },
    { path: '/product/:id' ,element: <Product/> }
  ]);

  // Conditionally render NavBar based on the route
  return (
    <Fragment>
      {!['/login', '/signup', '/verify-email'].includes(location.pathname) && <NavBar />}
      <Container>{element}</Container>
   
    </Fragment>    
  );
}

export default App;
