import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function ArtistCard({ data }: any) {
  // console.log(data)

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ArtistPage`);
  };
  return (
    <Fragment>
      <div className="col-3 explore-card">
        <div className="rounded">
          <img
            src={data.path}
            alt="product"
            className="explore-card-image"
            onClick={handleClick}
          ></img>
        </div>
        <h4 className='mt-2'>
          {data.name}
        </h4>
      </div>
    </Fragment>
  );
}

export default ArtistCard;
