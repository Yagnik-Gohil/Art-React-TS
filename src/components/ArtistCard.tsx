import React, { useState } from 'react';
import Images from '../utils/image';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsCartPlusFill } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';

function ArtistCard({ data }: any) {
  // Group the images into sets of four
  const groupedImages = [];
  for (let i = 0; i < Images.length; i += 6) {
    groupedImages.push(Images.slice(i, i + 6));
  }
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClick = () => {
    navigate(`/ArtistPage/${data.id}`);
  };

  return (
    <div className="card bg-light p-3 my-3">
      <div className='artist-img-div d-flex align-items-center mb-3'>
        <img className='artists-img rounded-circle' src={data.path} alt="" />
        <div className='my-auto w-50 mx-3'>
          <h3 className='artist-name' onClick={handleClick}>{data.name}</h3>
          <h5>{data.address}</h5>
        </div>
        <div className='d-flex justify-content-end align-items-center w-50'>
          <img className='facebook mx-2' src='https://cdn-icons-png.flaticon.com/128/174/174848.png' alt="Facebook" />
          <img className='instagram mx-2' src='https://cdn-icons-png.flaticon.com/128/2111/2111463.png' alt="Instagram" />
          <div className="explore-card-icons-div d-flex justify-content-center">
            <div className="d-flex align-items-start">

            <img className='facebook mx-2 explore-icon' src='https://cdn-icons-png.flaticon.com/128/3670/3670032.png'></img>
                <img className='instagram mx-2 explore-icon' src='https://cdn-icons-png.flaticon.com/128/3955/3955024.png'></img>

            </div>
          </div>
        </div>
      </div>
      <Carousel className='rounded overflow-hidden'>
        {groupedImages.map((imageSet, index) => (
          <Carousel.Item key={index}>
            <div className="row">
              <div className='d-flex'>
                {imageSet.map((image, i) => (
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6 d-flex justify-content-center" key={i}>
                    <img className='carousel-img rounded' src={image.path} alt={`Image ${i}`} />
                  </div>
                ))}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ArtistCard;
