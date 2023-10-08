import React from 'react';
import { PiHeartStraightThin } from 'react-icons/pi';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyCart = () => {
  return (
    <div className="profile-page py-5">
      <div className='d-flex row justify-content-center text-center'>
        <PiHeartStraightThin className='text-secondary big-icon' /><br /><br />
        <h1 >YOUR CART IS EMPTY</h1>
        <p>You don't have any products in your Cart</p>
        <Link to={'/explore'}>
          <Button className='my-4 profile-btn' >Go to Shop</Button>
        </Link>
      </div>
    </div>
  );
};

export default MyCart;