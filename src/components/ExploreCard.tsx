import { AiFillHeart } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import { BsCartPlusFill } from 'react-icons/bs';

function ExploreCard({ data }: any) {
  // console.log(data)
  return (
    <div className="col-3 explore-card">
      <div>
        <img src={data.path} alt="product" className="explore-card-image"></img>
        <div className="explore-card-icons-div">
          <AiFillHeart size={20} className='heart-fill mx-2 explore-icon'></AiFillHeart>
          <FaEye size={20} className='fill-black mx-2 explore-icon'></FaEye>
          <BsCartPlusFill size={20} className='fill-black mx-2 explore-icon'></BsCartPlusFill>
        </div>
      </div>
      <h5 className="m-0 pt-2">{data.title}</h5>
      <p>
        Price: {data.price} {data.currency}
      </p>
    </div>
  );
}

export default ExploreCard;
