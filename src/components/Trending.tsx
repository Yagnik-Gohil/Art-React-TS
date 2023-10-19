import react from 'react';
import { Image } from 'react-bootstrap';

const Trending = ({ data }: any) => {
  return (
    <>
      <div className="d-flex p-2 flex-wrap trending">
        <div className="image-container">
          <Image
            className="trending-img img-fluid h-100 w-100"
            src={data.path}
            alt="trendings"
          />
        </div>
      </div>
    </>
  );
};
export default Trending;
