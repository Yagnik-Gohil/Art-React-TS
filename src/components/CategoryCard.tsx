import React from 'react';
import { Image } from 'react-bootstrap';

const CategoryCard = ({ data }: any) => {
  return (
    <div className=" col-sm-6 col-lg-3 col-md-4 p-2">
      <div className="border float-right home-card rounded overflow-hidden">
        <div className="row h-50">
          <div className="col-3 col-sm-4 col-md-4 cover">
            <img
              className="img-fluid home-card-img"
              src={data.path}
              alt="Card image"
            />
          </div>
          <div className="col-9 col-sm-8 col-md-8 d-flex align-items-center justify-content-center">
            <div className="card-body mx-2 px-0">
              <h5 className="card-title my-auto">{data.title}</h5>
              <p className="card-text">{data.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
