import react from 'react';
import { Image } from 'react-bootstrap';

const Trending = ({ data }: any) => {
  return (
   
      <div className="col-4 p-1">
        <div className="image-container trending">
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
