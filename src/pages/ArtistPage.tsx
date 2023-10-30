import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import Images from '../utils/image';
import Artist from '../utils/artists';
import ExploreCard from '../components/ExploreCard';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const ArtistPage = () => {
  const params = useParams();

  const [artist, setArtist] = useState<any>();

  useEffect(() => {
    const artist = Artist.find((o) => o.id === params.id);
    setArtist(artist);
    window.scrollTo(0, 0);
  }, [params]);

  return (
    <>
      <div className="row">
        <div className="col-md-4 col-lg-4 artist-sidebar py-5">
          <div className='bg-light border border-dark rounded overflow-hidden'>
            <div className="top-img-div position-relative">
              <img
                src='https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                className="top-photo"
                alt=""
              />
              <div className='artist-img position-absolute top-100 start-50 translate-middle'>
                <img
                  className="rounded-circle"
                  src={artist?.path} 
                  alt=""
                />
              </div>
            </div>
            <div className='text-center artist-details mt-5 p-5'>
              
              <h3 className='mt-2'>{artist?.name}</h3>
              <h5>{artist?.address}</h5><br></br>
              <p>
                {artist?.description}
              </p>
              <div>
                <img className='facebook mx-2' src='https://cdn-icons-png.flaticon.com/128/174/174848.png'></img>
                <img className='instagram mx-2' src='https://cdn-icons-png.flaticon.com/128/2111/2111463.png'></img>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-lg-8">
          <div className="row d-flex justify-content-center py-5">
            {Images.map((data: any, index: number) => {
              return (
                <div className="col-3 explore-card" key={index}>
                  <ExploreCard data={data}></ExploreCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistPage;
