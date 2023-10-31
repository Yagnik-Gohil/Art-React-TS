import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsCartPlusFill } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';
function ArtistCard({ data }: any) {
  // console.log(data)

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClick = () => {
    navigate(`/ArtistPage/${data.id}`);
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
          <div className="explore-card-icons-div d-flex justify-content-center">
            <div className="d-flex align-items-start">

            <img className='facebook mx-2 explore-icon' src='https://cdn-icons-png.flaticon.com/128/3670/3670032.png'></img>
                <img className='instagram mx-2 explore-icon' src='https://cdn-icons-png.flaticon.com/128/3955/3955024.png'></img>

            </div>
          </div>
        </div>
        <h4 className='mt-2'>
          {data.name}
        </h4>
        <p>{data.address}</p>
      </div>
    </Fragment>
  );
}

export default ArtistCard;
