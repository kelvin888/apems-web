import React, { Fragment } from "react";
import "./BottomLayer.scss";

const BottomLayer = () => {
  return (
    <Fragment>
      <div className="bottom-layer">
        <div className="remain-connected">
          <div>
            <h1 className="header-text">
              Remain <span className="text-red">connected</span> <br /> wherever you go.
            </h1>

            <span style={{width: '3rem', borderBottom: '1px solid red'}}></span>
          </div>
          <p className='text-body'>
            Virtual event experience is so much more than just a live video.
            That’s why you can build a full agenda on our platform, where
            multiple sessions are running simultaneously and attendees are
            interacting with your specified content.
          </p>
          <div>
            <form className="form-container">
              <input autofocus placeholder='Email address' />
              <button type="submit">Request for Demo</button>
            </form>
          </div>
        </div>
        <div className="video-container">
          <div className="connected-video">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/69U-EUeEYII" title="APEMS VIDEO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BottomLayer;
