import React from 'react';
import { Link } from 'react-router-dom';

const ProfileNav = () => {
  return (

        <div>
          <div className="">
            <ul className="navList">
              <li>
                <Link to={'/profile'} className="nav-link border rounded-top border-bottom-0">
                  PROFILE
                </Link>
              </li>
              <li>
                <Link to={'/profile/password'} className="nav-link border border-bottom-0">
                  PASSWORD
                </Link>
              </li>
              <li>
                <Link to={'/profile/address'} className="nav-link border border-bottom-0">
                  ADDRESS
                </Link>
              </li>
              <li>
                <Link to={'/profile/mywishlist'} className="nav-link border border-bottom-0">
                  MY WISHLIST
                </Link>
              </li>
              <li>
                <Link to={'/profile/mycart'} className="nav-link border border-bottom-0">
                  MY CART
                </Link>
              </li>
              <li>
                <Link to={'/profile/history'} className="nav-link border border-bottom-0">
                  ORDER HISTORY
                </Link>
              </li>
              <li>
                <Link to={'/'} className="nav-link border rounded-bottom">
                  LOGOUT
                </Link>
              </li>
            </ul>
          </div>
        </div>
  );
};

export default ProfileNav;
