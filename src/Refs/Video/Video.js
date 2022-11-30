import React, { useEffect, useRef } from "react";
import VideoItem from "./VideoItem";

export default function Video() {
  const videoRef = useRef();
  const handlePlay = () => {
    videoRef.current.chay();
  };

  const handlePause = () => {
    videoRef.current.dung();
  };

  const handleZoomIn = () => {
    videoRef.current.phongto();
  };

  const handleZoomOut = () => {
    videoRef.current.thunho();
  };

  const handleControls = () => {
    videoRef.current.thanhdieukhien();
  };

  useEffect(() => {
    console.log(videoRef);
    // videoRef.current.remove();
  }, []);

  return (
    <div>
      <VideoItem ref={videoRef} />
      <hr />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
      <button onClick={handleControls}>Controls</button>
    </div>
  );
}
