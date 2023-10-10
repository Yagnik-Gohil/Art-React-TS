import { AiFillHeart } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import { BsCartPlusFill } from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ExploreCard({ data }: any) {
  // console.log(data)

  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    navigate(`/product/${data.id}`);
  };
  return (
    <Fragment>
      <div className="col-3 explore-card">
        <div>
          <img
            src={data.path}
            alt="product"
            className="explore-card-image"
            onClick={handleClick}
          ></img>
          <div className="explore-card-icons-div">
            <AiFillHeart
              size={20}
              className="heart-fill mx-2 explore-icon"
            ></AiFillHeart>
            <FaEye
              size={20}
              className="fill-black mx-2 explore-icon"
              onClick={handleShow}
            ></FaEye>
            <BsCartPlusFill
              size={20}
              className="fill-black mx-2 explore-icon"
            ></BsCartPlusFill>
          </div>
        </div>
        <h5 className="m-0 pt-2">{data.title}</h5>
        <p>
          Price: {data.price} {data.currency}
        </p>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="d-flex justify-content-center p-0"
      >
        <div>
          <div className="model-image">
            <img src={data.path} alt="product"></img>
          </div>
          <div className="text-center p-1">
            <Button variant="light" size="sm" className="border mx-2">
              ADD TO WISHLIST
            </Button>
            <Button variant="light" size="sm" className="border mx-2">
              VIEW DETAILS
            </Button>
            <Button variant="light" size="sm" className="border mx-2">
              ADD TO CART
            </Button>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}

export default ExploreCard;
