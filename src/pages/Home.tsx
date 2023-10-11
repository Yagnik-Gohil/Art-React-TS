import React from 'react';
import Images from '../utils/category';
import HomeCarousel from '../components/HomeCarousel';
import HomeCard from '../components/HomeCard';
function Home() {


  return (
    <>
      <HomeCarousel />
      <h1 className="text-center py-3">Explore By Catagory</h1>
      <br></br>
      <div className="d-flex justify-content-center flex-wrap">
        {Images.map((data: any, index: number) => {
          return <HomeCard data={data} key={index}></HomeCard>;
        })}
      </div>
    </>
  );
}

export default Home;
