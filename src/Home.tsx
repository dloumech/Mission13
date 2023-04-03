import styles from './M.module.css';
import React from 'react';

function TopBanner() {
  return (
    <>
      <br></br>
      <div className="text-center">
        <h2>Joel Hilton's Movie Collection</h2>
        <img src={require('./JoelHiltonHeadshot.jpg')} alt="companyLogo" />
      </div>
      <br></br>
      <div className="text-center">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <p>For your browsing pleasure.</p>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
