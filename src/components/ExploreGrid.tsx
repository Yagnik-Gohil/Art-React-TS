import React from 'react';
import ExploreCard from './ExploreCard';
import Images from '../utils/image';

function ExploreGrid() {
  return (
      <div className="row d-flex justify-content-center">
        {Images.map((data: any, index:number) => {
          return <ExploreCard data={data} key={index}></ExploreCard>;
        })}
      </div>
  );
}

export default ExploreGrid;
