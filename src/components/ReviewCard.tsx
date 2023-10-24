import React from 'react';
import { BiSolidMessageRoundedDots } from 'react-icons/bi';

const ReviewCard = ({ data }: any) => {
  return (
    <div className="col-lg-4 col-md-6 p-4">
      <div className="card p-3 position-relative">
        <BiSolidMessageRoundedDots
          size={40}
          className="position-absolute top-0 start-100 translate-middle"
        />
        <p>{data.text}</p>
        <div className="row">
          <div className="col-12 col-sm-3 col-md-3 col-lg-3">
            <img
              src={data.path}
              height="70px"
              width="70px"
              className="rounded-circle review-image p-1"
              alt=""
            />
          </div>
          <div className="col-12 col-sm-9 col-md-9 col-lg-9 d-flex align-items-center">
            <div>
              <h4>Name</h4>
              <h6 className="text-muted">Design Manager</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
