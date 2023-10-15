import React from 'react';
import Images from '../utils/category';
import ProductImages from '../utils/product';
import HomeCarousel from '../components/HomeCarousel';
import HomeCard from '../components/HomeCard';
import Products from '../components/Products'
function Home() {
  

  return (
    <>
      <HomeCarousel />
      <h1 className="text-center py-3">Explore By Catagory</h1>

      <div className="d-flex justify-content-center flex-wrap">
        {Images.map((data: any, index: number) => {
          return <HomeCard data={data} key={index}></HomeCard>;
        })}
      </div>
      <h1 className="text-center py-3">Top Products</h1>
      <div className="home-Products justify-content-center d-flex flex-wrap">
        {ProductImages.map((data: any, index: number) => {
          return <Products data={data} key={index}></Products>;
        })}
      </div>
      <br></br>
      {/* <h1 className='text-center py-3'>Art By Price</h1> */}
    </>
  );
}

export default Home;
