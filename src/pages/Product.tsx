import React, { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Images from '../utils/image';
import { IoCaretBackCircleOutline } from 'react-icons/io5';
import { GrFormNext } from 'react-icons/gr';
import { TbZoomIn, TbZoomOut, TbZoomReset } from 'react-icons/tb';

function Product() {
  const params = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<any>();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const product = Images.find((o) => o.id === params.id);
    setProduct(product);
  }, []);

  return (
    <Fragment>
      <div className="row my-4">
        <div className="col">
          <div className="border rounded product-top-bar d-flex align-items-center">
            <div className="d-flex align-items-start px-4">
              <div
                className="back-icon rounded-circle d-flex align-items-center justify-content-center bg-light"
                onClick={handleBack}
              >
                <IoCaretBackCircleOutline size={24} />
              </div>
              <div className="mx-4 product-top-bar-text">
                <h6 className="m-0">
                  Explore <GrFormNext /> {product?.title}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row zoom-row">
        <div className="col zoom-col">
          <div>
            <div className='zoom-icon my-2 bg-light border border-secondary rounded-circle d-flex align-items-center justify-content-center'>
              <TbZoomIn size={20} />
            </div>
            <div className='zoom-icon my-2 bg-light border border-secondary rounded-circle d-flex align-items-center justify-content-center'>
              <TbZoomOut size={20} />
            </div>
            <div className='zoom-icon my-2 bg-light border border-secondary rounded-circle d-flex align-items-center justify-content-center'>
              <TbZoomReset size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="row product-details">
        <div className="col col-md-6 col-sm-6">
          <div className="product-image">
            <img src={product?.path} alt="product"></img>
          </div>
        </div>

        <div className="col col-md-6 col-sm-6"></div>
      </div>
    </Fragment>
  );
}

export default Product;
