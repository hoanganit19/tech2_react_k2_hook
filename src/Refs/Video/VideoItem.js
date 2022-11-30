import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import video from "./video.mp4";

function VideoItem(props, ref) {
  const videoRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      chay: () => videoRef.current.play(),
      dung: () => videoRef.current.pause(),
      phongto: () => (videoRef.current.style.width = "400px"),
      thunho: () => (videoRef.current.style.width = "200px"),
      thanhdieukhien: (status) =>
        (videoRef.current.controls = videoRef.current.controls ? false : true),
    };
  });

  return (
    <video ref={videoRef} width={300}>
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default forwardRef(VideoItem);
