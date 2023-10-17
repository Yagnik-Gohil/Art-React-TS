import React, { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Images from '../utils/image';
import { IoCaretBackCircleOutline } from 'react-icons/io5';
import { GrFormNext } from 'react-icons/gr';
import { MdVerified } from 'react-icons/md';
import { TbZoomIn, TbZoomOut, TbZoomReset } from 'react-icons/tb';
import { Button, Table } from 'react-bootstrap';
import ExploreCard from '../components/ExploreCard';

function Product() {
  const params = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<any>();
  const [height, setHeight] = useState(100);
  const [limit, setLimit] = useState(5);

  const price = new Intl.NumberFormat('en-IN', {
    maximumSignificantDigits: 3,
  }).format(product?.price);

  const handleBack = () => {
    navigate('/explore');
  };

  useEffect(() => {
    const product = Images.find((o) => o.id === params.id);
    setProduct(product);
    window.scrollTo(0, 0);
  }, [params]);

  const handleZoomIn = () => {
    if (height < 150) {
      // Adjust the maximum zoom level as needed
      setHeight(height + 20);
    }
  };

  const handleZoomOut = () => {
    if (height > 50) {
      // Adjust the minimum zoom level as needed
      setHeight(height - 20);
    }
  };

  const handleViewMore = () => {
    setLimit(limit + 5);
  };

  const handleZoomReset = () => {
    setHeight(100);
  };

  const imageStyle = {
    height: `${height}%`, // Apply zoom using CSS scale transform
  };

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
            <div className="zoom-icon my-2 bg-light border border-secondary rounded-circle d-flex align-items-center justify-content-center">
              <TbZoomIn size={20} onClick={handleZoomIn} />
            </div>
            <div className="zoom-icon my-2 bg-light border border-secondary rounded-circle d-flex align-items-center justify-content-center">
              <TbZoomOut size={20} onClick={handleZoomOut} />
            </div>
            <div className="zoom-icon my-2 bg-light border border-secondary rounded-circle d-flex align-items-center justify-content-center">
              <TbZoomReset size={20} onClick={handleZoomReset} />
            </div>
          </div>
        </div>
      </div>
      <div className="row product-details">
        <div className="col-lg-6 col-md-6 col-sm-12 my-2">
          <div className="bg-light rounded product-image d-flex align-items-center justify-content-center custom-scroll">
            <img src={product?.path} alt="product" style={imageStyle}></img>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 my-2">
          <h2>{product?.title}</h2>
          <p>
            Art By: <span className="fw-bold">{product?.artist}</span> -
            Udaipur, India
          </p>
          <h1>₹ {price}</h1>
          <hr></hr>
          <h4>Details:</h4>
          <p>{product?.description}</p>

          <Table striped bordered hover size="sm">
            <tbody>
              <tr>
                <td className="text-nowrap">Size</td>
                <td>
                  <span className="fw-bold">{product?.width}</span> in x{' '}
                  <span className="fw-bold">{product?.height}</span> in (Width x
                  Height)
                </td>
              </tr>
              <tr>
                <td className="text-nowrap">Medium</td>
                <td>{product?.medium}</td>
              </tr>
              <tr>
                <td className="text-nowrap">Created At</td>
                <td>{product?.art_created_at}</td>
              </tr>
              <tr>
                <td className="text-nowrap">Display Spots</td>
                <td>
                  {product?.display_spots.map((spot: string, index: string) => {
                    return (
                      <Button
                        type="button"
                        className="btn btn-secondary btn-sm m-1"
                        key={index}
                      >
                        {spot}
                      </Button>
                    );
                  })}
                </td>
              </tr>
              {product?.is_signed_by_artist && (
                <tr>
                  <td colSpan={2} className="p-2 text-center">
                    <MdVerified
                      size={40}
                      className="verified-tick"
                    ></MdVerified>{' '}
                    Signature of the artist and certificate are included.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>

          <div className="row">
            <div className="col-md-4 col-sm-12 mt-2">
              <Button className="min-w-100 fw-bold">BUY NOW</Button>
            </div>
            <div className="col-md-4 col-sm-12 mt-2">
              <Button className="min-w-100 fw-bold">ADD TO CART</Button>
            </div>
            <div className="col-md-4 col-sm-12 mt-2">
              <Button className="min-w-100 fw-bold">ADD TO WISHLIST</Button>
            </div>
          </div>
        </div>

        <hr className="my-5"></hr>

        <h4>More Works by {product?.artist}</h4>
        <div className="bg-light rounded text-center pt-5 pb-4">
          <div className="row d-flex justify-content-center">
            {Images.slice(0, limit).map((data: any, index: number) => {
              return (
                <div className="col-2 explore-card" key={index}>
                  <ExploreCard data={data}></ExploreCard>
                </div>
              );
            })}
          </div>
          <Button className="my-2" onClick={handleViewMore}>
            View More
          </Button>
        </div>

        <hr className="my-5"></hr>
      </div>
    </Fragment>
  );
}

export default Product;
