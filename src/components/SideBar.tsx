import React, { Fragment } from 'react';

function SideBar() {
  return (
    <Fragment>
      <br></br>
      <h4 className="f-brand">Filters</h4>
      <div className="vstack gap-3">
        <div className="bg-light border">First item</div>
        <div className="bg-light border">Second item</div>
        <div className="bg-light border">Third item</div>
        <div className="bg-light border">Third item</div>
        <div className="bg-light border">Third item</div>
        <div className="bg-light border">Third item</div>
        <div className="bg-light border">Third item</div>
        <div className="bg-light border">Third item</div>
      </div>
    </Fragment>
  );
}

export default SideBar;
