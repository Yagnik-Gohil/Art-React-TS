import React from 'react';
import Images from '../utils/category';
import ProductImages from '../utils/trending';
import HomeCarousel from '../components/HomeCarousel';
import HomeCard from '../components/HomeCard';
import Trending from '../components/Trending';
import artists from '../utils/artists'
import ArtistsCard from '../components/ArtistsCard';
import { Button, Card } from 'react-bootstrap';

function Home() {
  const Buttons = () => {
    return (
      <div className="d-flex flex-wrap">
        <div className="col-6 col-sm-4 col-md-4 col-lg-2 p-2">
          <Button variant="outline-secondary" size="lg" className="w-100 h-100">
            Under ₹1k
          </Button>
        </div>
        <div className="col-6 col-sm-4 col-md-4 col-lg-2 p-2">
          <Button variant="outline-secondary" size="lg" className="w-100 h-100">
            ₹1k-₹5k
          </Button>
        </div>
        <div className="col-6 col-sm-4 col-md-4 col-lg-2 p-2">
          <Button variant="outline-secondary" size="lg" className="w-100 h-100">
            ₹5k-₹10k
          </Button>
        </div>
        <div className="col-6 col-sm-4 col-md-4 col-lg-2 p-2">
          <Button variant="outline-secondary" size="lg" className="w-100 h-100">
            ₹100k-₹300k
          </Button>
        </div>
        <div className="col-6 col-sm-4 col-md-4 col-lg-2 p-2">
          <Button variant="outline-secondary" size="lg" className="w-100 h-100">
            ₹300k-₹500k
          </Button>
        </div>
        <div className="col-6 col-sm-4 col-md-4 col-lg-2 p-2">
          <Button variant="outline-secondary" size="lg" className="w-100 h-100">
            ₹500k-Above
          </Button>
        </div>
      </div>
    );
  };

  return (
    <>
      <HomeCarousel />
      <br></br>
      <h1 className="py-3">Explore By Category</h1>
      <br></br>

      <div className="d-flex justify-content-center flex-wrap">
        {Images.map((data: any, index: number) => {
          return <HomeCard data={data} key={index}></HomeCard>;
        })}
      </div>

      <br></br>
      <h1 className="py-3">Trending</h1>
      <br></br>

      <div className="home-trending  justify-content-center d-flex flex-wrap">
        {ProductImages.map((data: any, index: number) => {
          return <Trending data={data} key={index}></Trending>;
        })}
      </div>

      <br></br>
      <h1 className="py-3">Art By Price</h1>
      <br></br>
      <Buttons />
      <br></br>
      <h1 className="py-3">Our Artists</h1>
      <br></br>
      <div className="home-artist row">
        {artists.map((data: any,index: number)=>{
          return   <ArtistsCard data={data} key={index}/>;
        })}
      
      </div>

      <br></br>
      <br></br>
    </>
  );
}

export default Home;
