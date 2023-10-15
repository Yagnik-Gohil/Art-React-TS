import react from 'react';
import { Image } from 'react-bootstrap';

const Products = ({ data }: any) => {
  return (
    <>
      <div className="d-flex justify-content-center flex-wrap product">
        <Image
          className="product-img img-fluid h-100 w-100 card-image"
          src={data.path}
          alt="our products"
        />
      </div>
    </>
  );
};
export default Products;