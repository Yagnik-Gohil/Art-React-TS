import React from 'react';
import ArtistGrid from '../components/ArtistGrid';
import ArtistSideBar from '../components/ArtistSideBar';

function Artists() {
  return (
    <div className="row">
    <div className="col-3 col-md-3 col-sm-4 sidebar py-5">
      <ArtistSideBar />
    </div>
    <div className="col-9 col-md-9 col-sm-8 py-5">
      <ArtistGrid />
    </div>
  </div>
  );
}

export default Artists;
