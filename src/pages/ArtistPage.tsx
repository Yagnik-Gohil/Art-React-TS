import React from 'react';
import Images from '../utils/image';
import { Button, InputGroup } from 'react-bootstrap';

const ArtistPage = () => {
  return (
    <div className="position-relative">
      <div className="d-flex flex-nowrap">
        {Images.slice(1, 4).map((data: any, index: number) => (
          <div className="w-100 p-0 img-div" key={index}>
            <div className="rounded-0 h-100">
              <img
                src={data.path}
                className="h-100 w-100 object-fit-cover"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>

      <div className="artist-img-div">
        <img
          src="https://media.istockphoto.com/id/1398385392/photo/happy-young-millennial-indian-business-woman-head-shot-portrait.jpg?s=612x612&w=0&k=20&c=QSRWD4KI7JCRJGdMKAhfUBv3Fc2v-7Nvu04iRMAPhGU="
          className="artist-image rounded-circle p-2"
          alt=""
        />
        <h2>Name Surname</h2>
        <h4>Country</h4>
      </div>
      <div className="row mt-5 ">
        <div className="col-md-4 mb-3">
          <br />
          <br /> <br /> <br />
          <br /> <br />
          <br />
          <p className="px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            beatae tempore sit, sunt eaque nulla repellendus molestias
            reprehenderit quis alias esse ullam. Voluptates, magnam maxime.
          </p>
          <div className="row">
            <div className="col-4">
                <h1>15k</h1>
                <p>Follower</p>
            </div>
            <div className="col-4">
                <h1>200</h1>
                <p>Following</p>
            </div>
            <div className="col-4">
                <h1>15</h1>
                <p>Post</p>
            </div>
          </div>
          <button className='btn btn-secondary'>Follow</button>
          <button className='btn btn-secondary mx-3'>Message</button>
        </div>
        <div className="col-md-8">
       
  <div className="artist-card-grid">
    {Images.map((data: any, index: number) => {
      return (
        <div className="artist-grid-img p-2 align-self-start p-1">
          <img
            className="img-fluid object-fit-cover shadow-sm rounded-2"
            src={data.path}
            alt="product"
          />
        </div>
      );
    })}
  </div>
</div>


      </div>
    </div>
  );
};

export default ArtistPage;
