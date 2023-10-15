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
        <div className="rounded">
          <img
            src={data.path}
            alt="product"
            className="explore-card-image"
            onClick={handleClick}
          ></img>
          <div className="explore-card-icons-div d-flex justify-content-center">
            <div className="d-flex align-items-start">
              <div className="explore-icon mx-2 rounded-circle bg-light d-flex align-items-center justify-content-center shadow">
                <AiFillHeart size={18} className="heart-fill"></AiFillHeart>
              </div>
              <div
                className="explore-icon mx-2 rounded-circle bg-light d-flex align-items-center justify-content-center shadow"
                onClick={handleShow}
              >
                <FaEye size={18} className="fill-black"></FaEye>
              </div>
              <div className="explore-icon mx-2 rounded-circle bg-light d-flex align-items-center justify-content-center shadow">
                <BsCartPlusFill
                  size={18}
                  className="fill-black"
                ></BsCartPlusFill>
              </div>
            </div>
          </div>
        </div>
        <h6 className="pt-2">{data.title}</h6>
        <h6>
          Price: {data.price} {data.currency}
        </h6>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="d-flex justify-content-center p-0"
      >
        <div>
          <div className="model-image">
            <img src={data.path} alt="product" className="rounded-top"></img>
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
