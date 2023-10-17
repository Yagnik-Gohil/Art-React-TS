import React from 'react';
import ExploreCard from './ExploreCard';
import Images from '../utils/image';

function ExploreGrid() {
  return (
    <div className="row d-flex justify-content-center">
      {Images.map((data: any, index: number) => {
        return (
          <div className="col-3 explore-card" key={index}>
            <ExploreCard data={data}></ExploreCard>
          </div>
        );
      })}
    </div>
  );
}

export default ExploreGrid;
