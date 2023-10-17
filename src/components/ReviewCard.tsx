import React from 'react';
import { BiSolidMessageRoundedDots } from 'react-icons/bi';

const ReviewCard = ({data}: any) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 p-4">
      <div className="card p-3 position-relative">
        <BiSolidMessageRoundedDots
          size={50}
          className="position-absolute top-0 start-100 translate-middle"
        />
        <p>{data.text}</p>
        <div className="row mt-3">
          <div className="col-4 col-md-4 col-sm-6">
            <img
              src={data.path}
              height={'100px'}
              width={'100px'}
              className="rounded-circle object-fit-cover"
              alt=""
            />
          </div>
          <div className="col-8 col-md-8 col-sm-6  my-auto">
            <h5>Name</h5>
            <p>Design Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
