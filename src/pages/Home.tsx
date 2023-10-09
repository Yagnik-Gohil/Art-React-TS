import React from 'react';
import Banners from '../components/Banners';
import Category from '../components/Category';
import { bannerData } from '../utils/Data';
import { categoryData } from '../utils/Data';
import PriceFilter from '../components/PriceFilter';
import Footer from '../components/Footer';
import ExploreGrid from '../components/ExploreGrid';

function Home() {
  return ( <div>
    <div className='flex-content'>
      <Banners bannerData={bannerData}></Banners>
      <div className='category'>
        <h2>Explore By Category</h2>
        <Category categoryData={categoryData}></Category>
      </div>
      <div className='category'>
          <h2>Our Top Products</h2>
        <ExploreGrid/>
      </div>
      <div className='art-price'>
        <div className='artprice'>
          <h2 className='artprice-title mb-34'>Art By Price</h2>
          <PriceFilter></PriceFilter>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>);
}

export default Home;
