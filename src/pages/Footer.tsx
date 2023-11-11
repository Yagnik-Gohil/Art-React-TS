import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="container">
    <footer className="row py-5 my-5 border-top">
      <div className="col-lg-3 col-12 mb-3">
   
        <h5 className="text-muted f-brand">
"Explore a world of creativity through our online art gallery."</h5>
      </div>
  
      <div className="col-lg-2 col-md-3 col-sm-3 col-6 mb-3">
      <h5>ART CATEGORY</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to={'/sculpture'} className="nav-link p-0 text-muted">Sculpture</Link></li>
          <li className="nav-item mb-2"><Link to={'/serigraph'} className="nav-link p-0 text-muted">Serigraph</Link></li>
          <li className="nav-item mb-2"><Link to={'/drawing'} className="nav-link p-0 text-muted">Drawing</Link></li>
          <li className="nav-item mb-2"><Link to={'/painting'} className="nav-link p-0 text-muted">Painting</Link></li>
          <li className="nav-item mb-2"><Link to={'/printmaking'} className="nav-link p-0 text-muted">Printmaking</Link></li>
          <li className="nav-item mb-2"><Link to={'/photography'} className="nav-link p-0 text-muted">Photography</Link></li>
          <li className="nav-item mb-2"><Link to={'/digital Art'} className="nav-link p-0 text-muted">Digital Art</Link></li>
        </ul>
      </div>
  
      <div className="col-lg-2 col-md-3 col-sm-3 col-6 mb-3">
      <h5>ART BY PRICE</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to={'/under1k'} className="nav-link p-0 text-muted">under1k</Link></li>
          <li className="nav-item mb-2"><Link to={'/₹1k-₹5k'} className="nav-link p-0 text-muted">₹1k-₹5k</Link></li>
          <li className="nav-item mb-2"><Link to={'/₹5k-₹10k'} className="nav-link p-0 text-muted">₹5k-₹10k</Link></li>
          <li className="nav-item mb-2"><Link to={'/₹100k-₹300k'} className="nav-link p-0 text-muted">₹100k-₹300k</Link></li>
          <li className="nav-item mb-2"><Link to={'/₹300k-₹500k'} className="nav-link p-0 text-muted">₹300k-₹500k</Link></li>
          <li className="nav-item mb-2"><Link to={'/above₹500k'} className="nav-link p-0 text-muted">above₹500k</Link></li>
        </ul>
      </div>

      <div className="col-lg-2 col-md-3 col-sm-3 col-6 mb-3">
      <h5>PROFILE</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to={'/profile'} className="nav-link p-0 text-muted">Profile</Link></li>
          <li className="nav-item mb-2"><Link to={'/profile/password'} className="nav-link p-0 text-muted">Password</Link></li>
          <li className="nav-item mb-2"><Link to={'/profile/address'} className="nav-link p-0 text-muted">Address</Link></li>
          <li className="nav-item mb-2"><Link to={'/profile/mywishlist'} className="nav-link p-0 text-muted">Wishlist</Link></li>
          <li className="nav-item mb-2"><Link to={'/profile/mycart'} className="nav-link p-0 text-muted">Cart</Link></li>
          <li className="nav-item mb-2"><Link to={'/profile/history'} className="nav-link p-0 text-muted">Order History</Link></li>
        </ul>
      </div>

      <div className="col-lg-2 col-md-3 col-sm-3 col-6 mb-3">
      <h5>ARTISTS</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to={'/profile'} className="nav-link p-0 text-muted">Profile</Link></li>
          <li className="nav-item mb-2"><Link to={'/profile/password'} className="nav-link p-0 text-muted">Password</Link></li>
          <li className="nav-item mb-2"><Link to={'/profile/address'} className="nav-link p-0 text-muted">Address</Link></li>
          <li className="nav-item mb-2"><Link to={'/profile/mywishlist'} className="nav-link p-0 text-muted">Wishlist</Link></li>
          <li className="nav-item mb-2"><Link to={'/profile/mycart'} className="nav-link p-0 text-muted">Cart</Link></li>
          <li className="nav-item mb-2"><Link to={'/profile/history'} className="nav-link p-0 text-muted">Order History</Link></li>
        </ul>
      </div>

   
  
      {/* <div className="col mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to={ } className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to={ } className="nav-link p-0 text-muted">Features</Link></li>
          <li className="nav-item mb-2"><Link to={ } className="nav-link p-0 text-muted">Pricing</Link></li>
          <li className="nav-item mb-2"><Link to={ } className="nav-link p-0 text-muted">FAQs</Link></li>
          <li className="nav-item mb-2"><Link to={ } className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div>
  
      <div className="col mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to={ } className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to={ } className="nav-link p-0 text-muted">Features</Link></li>
          <li className="nav-item mb-2"><Link to={ } className="nav-link p-0 text-muted">Pricing</Link></li>
          <li className="nav-item mb-2"><Link to={ } className="nav-link p-0 text-muted">FAQs</Link></li>
          <li className="nav-item mb-2"><Link to={ } className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div>
  
      <div className="col mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to={ } className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to={ } className="nav-link p-0 text-muted">Features</Link></li>
          <li className="nav-item mb-2"><Link to={ } className="nav-link p-0 text-muted">Pricing</Link></li>
          <li className="nav-item mb-2"><Link to={ } className="nav-link p-0 text-muted">FAQs</Link></li>
          <li className="nav-item mb-2"><Link to={ } className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div> */}
    </footer>
  </div>
  )
}

export default Footer
