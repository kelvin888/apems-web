import React from "react";
import Call from "../../assets/img/vid/call.mp4";

export const RemainConnected = () => {
  return (
    <>
      <section class="section d-table w-100">
        <div class="container">
          <div
            class="row mt-5 align-items-center position-relative"
            style={{ zIndex: "1" }}
          >
            <div class="col-lg-7 col-12">
              <div className="remain-connected">
                <div>
                  <h2 className="header-text">
                    Remain <span className="text-red">connected</span> <br />{" "}
                    wherever you go.
                  </h2>

                  <span
                    style={{ width: "3rem", borderBottom: "1px solid red" }}
                  ></span>
                </div>
                <p className="text-body">
                  Virtual event experience is so much more than just a live
                  video. That’s why you can build a full agenda on our platform,
                  where multiple sessions are running simultaneously and
                  attendees are interacting with your specified content.
                </p>
                <div>
                  <form className="form-container">
                    <input autofocus placeholder="Email address" />
                    <button type="submit">Request for Demo</button>
                  </form>
                </div>
              </div>
            </div>

            <div class="col-lg-5 col-12">
              <div className="video-container">
                <div className="connected-video">
                  <video class="apems-vid rounded" controls loop>
                    <source src={Call} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
