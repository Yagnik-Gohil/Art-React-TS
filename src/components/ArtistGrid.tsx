import React from 'react';
import ArtistCard from './ArtistCard'
import Aritist from '../utils/artists';

function ArtistGrid() {
  return (
      <div className="row d-flex justify-content-center">
        {Aritist.map((data: any, index:number) => {
          return <ArtistCard data={data} key={index}></ArtistCard>;
        })}
      </div>
  );
}

export default ArtistGrid;
