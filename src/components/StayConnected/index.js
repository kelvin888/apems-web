import React from "react";
import { DemoRequestInput } from "../UIKit/DemoRequestInput";

export const StayConnected = () => {
  return (
    <>
      <section class="section d-table pb-0 w-100" id="sticky-section">
        <div class="container">
          <div
            class="row mt-5 align-items-center position-relative"
            style={{ zIndex: "1" }}
          >
            <div class="col-lg-7 col-12">
              <div className="remain-connected">
                <div>
                  <h1 className="header-text">
                    Stay <span className="text-red">connected</span> to your
                    <br />
                    event from wherever you are.
                  </h1>

                  <span
                    style={{ width: "3rem", borderBottom: "1px solid red" }}
                  ></span>
                </div>
                <p className="text-body">
                  Experience so much more than just a live video from your
                  virtual or hybrid meetings, start your event with seamless
                  registration and accreditation of your participants, interact
                  with your attendees and receive poll votes.
                </p>
                <div className="mt-4">
                  <p className="text-body mb-0">
                    Register your email and request for a demo.
                  </p>
                  <DemoRequestInput borderType="gray" />
                </div>
              </div>
            </div>

            <div class="col-lg-5 col-12">
              <div className="video-container">
                <div className="connected-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/69U-EUeEYII"
                    title="APEMS VIDEO"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
