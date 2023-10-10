import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Images from '../utils/image';

function Product() {
  const params = useParams();

  const [product, setProduct] = useState<any>();

  useEffect(() => {
    const product = Images.find((o) => o.id === params.id);
    setProduct(product);
  }, []);

  return (
    <Fragment>
      <div className="row">
        <div className="col col-md-6 col-sm-6">
          <div>
            <img src={product?.path} alt="product"></img>
          </div>
        </div>

        <div className="col col-md-6 col-sm-6"></div>
      </div>
    </Fragment>
  );
}

export default Product;
