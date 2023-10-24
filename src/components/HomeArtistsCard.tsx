import React from 'react';
import Card from 'react-bootstrap/Card';

const HomeArtistCard = ({ data }: any) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 p-2">
      <Card className='mx-auto home-artist-div'>
        <Card.Img
          variant="top"
          src={data.path}
          alt={data.name}
          className='home-arist-img'       
        />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.address}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeArtistCard;
