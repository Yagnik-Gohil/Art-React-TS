import react from 'react';
import { Image } from 'react-bootstrap';

const Trending = ({ data }: any) => {
  return (
   
      <div className="col-sm-6 col-md-4 col-lg-4 p-2">
        <div className="image-container trending mx-auto">
          <Image
            className="trending-img img-fluid h-100 w-100"
            src={data.path}
            alt="trendings"
          />
        </div>
      </div>
    
  );
};
export default Trending;
