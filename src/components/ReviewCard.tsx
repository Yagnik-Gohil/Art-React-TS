import React from 'react';
import { BiSolidMessageRoundedDots } from 'react-icons/bi';

const ReviewCard = ({ data }: any) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 p-4">
      <div className="card p-3 position-relative">
        <BiSolidMessageRoundedDots
          size={50}
          className="position-absolute top-0 start-100 translate-middle"
        />
        <p>{data.text}</p>
        <div className="row">
          <div className="col-3 col-lg-3 col-md-4 col-sm-6">
            <img
              src={data.path}
              height={'70px'}
              width={'70px'}
              className="rounded-circle object-fit-cover"
              alt=""
            />
          </div>
          <div className="col-9 col-md-8 col-sm-6 d-flex align-items-center">
            <div className="">
              <h4 className="">Name</h4>
              <h6 className="text-muted">Design Manager</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
