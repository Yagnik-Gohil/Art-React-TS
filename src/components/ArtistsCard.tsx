import React from 'react';

const ArtistsCard = ({ data }: any) => {
  return (

      <div className="col-md-4 p-2">
        <div className="card contain-fit">
          <div className="overflow-hidden">
            <img
              className="card-img-top object-fit-cover p-2 rounded-4"
              src={data.path}
              height={'350px'}
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <h1>{data.name}</h1>
            <h4>{data.text}</h4>
          </div>
        </div>
      </div>

  );
};

export default ArtistsCard;
