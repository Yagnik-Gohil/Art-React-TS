import React from 'react';
import ArtistGrid from '../components/ArtistGrid';
import ArtistSideBar from '../components/ArtistSideBar';

function Artists() {
  return (
    <div className="row justify-content-center">
    <div className="col-lg-3 col-md-4 col-sm-12 artist-sidebar">
      <ArtistSideBar />
    </div>
    <div className="col-lg-9 col-md-8 col-sm-12">
      <ArtistGrid />
    </div>
  </div>
  );
}

export default Artists;
