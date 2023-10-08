import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyCart from '../components/MyCart';
import { Container } from 'react-bootstrap';
import MyProfile from '../components/MyProfile';
import History from '../components/History';
import ProfileNav from '../components/ProfileNav';


const Profile = () => {
  return (
    <Container fluid>
      <div className='row py-3'>
        <div className="h-75 py-5 col-md-3">
          <ProfileNav />
        </div>
        <div className="py-5 col-md-9">
          <Routes>
            <Route path="/" element={<MyProfile />} />
            <Route path="/mycart" element={<MyCart />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
