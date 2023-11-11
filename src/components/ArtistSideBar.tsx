import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

function ArtistSideBar() {

  return (
    <Fragment>
      <div className="mt-3">
            <ul className="navList">
              <li>
                <Link to={'/'} className="nav-link border rounded-top border-bottom-0">
                  ARTIST OF THE WEEK
                </Link>
              </li>
              <li>
                <Link to={'/'} className="nav-link border border-bottom-0">
                  POPULAR ARTIST
                </Link> 
              </li>
              <li>
                <Link to={'/'} className="nav-link border border-bottom-0">
                    TRENDING ARTIST
                </Link>
              </li>
              <li>
                <Link to={'/'} className="nav-link border border-bottom-0">
                  MOST VISITED
                </Link>
              </li>
              <li>
                <Link to={'/'} className="nav-link border rounded-bottom">
                  ALL ARTIST
                </Link>
              </li>
            </ul>
          </div>
    </Fragment>
  );
}

export default ArtistSideBar;
