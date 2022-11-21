import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Player.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Player() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-7">
          <div className="player py-5">
            <div className="player__image text-center">
              <img src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/1/5/9/2/159226aaebc0421c28d4921c041dc862.jpg" />
            </div>
            <div className="player__inner mt-4">
              <div className="row">
                <div className="col-8">
                  <div className="player__inner--action text-center">
                    <span>
                      <i className="fa-solid fa-circle-play fa-3x"></i>
                      {/* <i className="fa-solid fa-circle-pause fa-3x"></i> */}
                    </span>
                  </div>
                  <div className="player__inner--timer d-flex">
                    <span>00:00</span>
                    <input
                      type={"range"}
                      className="form-range mx-3"
                      defaultValue={0}
                    />
                    <span>05:35</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="player__volume d-flex h-100 align-items-end">
                    <span>
                      <i className="fa-solid fa-volume-high"></i>
                    </span>
                    <input type={"range"} className="form-range mx-2" />
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
