import React from 'react';
import { Image } from 'react-bootstrap';

const HomeCard = ({ data }: any) => {
  return (
    <div className="border rounded home-card p-0 m-2 float-right">
      <div className="row">
        <div className="col-6 col-sm-6">
          <img
            className="img-fluid h-100 w-100 card-image"
            src={data.path}
            alt="Card image"
          />
        </div>
        <div className="col-6 col-sm-6">
          <div className="card-body py-2 px-0">
            <h5 className="card-title ">{data.title}</h5>
            <p className="card-text">{data.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
