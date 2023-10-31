import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';

const MyCart = () => {
  return (
    <div className="profile-page rounded py-5">
      <div className="d-flex row justify-content-center text-center">
        <BsCart4 size={150} className="m-3"></BsCart4>
        <br />
        <br />
        <h1>YOUR CART IS EMPTY</h1>
        <p>You don't have any products in your Cart</p>
        
          <Button className="my-4 w-25 "><Link to={'/explore'} className='text-light'>Go to Shop</Link></Button>
 
      </div>
    </div>
  );
};

export default MyCart;
