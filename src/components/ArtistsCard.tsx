import React from 'react';

const ArtistsCard = ({ data }: any) => {
  return (

      <div className="col-lg-3 col-md-6 col-sm-6 p-2">
        <div className="card home-artist-card h-100 contain-fit">
          <div className="overflow-hidden">
            <img
              className="artist-img h-100 w-100 card-img-top object-fit-cover p-2 rounded-4"
              src={data.path}
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <h4 className='card-title'>{data.name}</h4>
            <p className='m-0'>{data.text}</p>
          </div>
        </div>
      </div>
  );
};

export default ArtistsCard;
