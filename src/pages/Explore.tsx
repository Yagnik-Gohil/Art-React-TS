import React from 'react';
import ExploreGrid from '../components/ExploreGrid';
import SideBar from '../components/SideBar';

function Explore() {
  return (
    <div className="row">
      <div className="col-3 col-md-3 col-sm-4 sidebar py-5">
        <SideBar />
      </div>
      <div className="col-9 col-md-9 col-sm-8 py-5">
        <ExploreGrid />
      </div>
    </div>
  );
}

export default Explore;
