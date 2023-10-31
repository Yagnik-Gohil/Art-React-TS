import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';

const MyWishlist = () => {
  return (
    <div className="profile-page rounded py-5">
      <div className="d-flex row justify-content-center text-center">
        <AiFillHeart size={150} className="m-3 heart-fill"></AiFillHeart>
        <br />
        <br />
        <h1>YOUR Wishlist IS EMPTY</h1>
        <p>You don't have any products in your Wishlist</p>
        
          <Button className="my-4 w-25 "><Link to={'/explore'} className='text-light'>Go to Shop</Link></Button>
 
      </div>
    </div>
  );
};

export default MyWishlist;
