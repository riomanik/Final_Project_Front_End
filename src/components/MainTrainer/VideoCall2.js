
import React from "react";
import Webcam from "react-webcam";
import { connect } from "react-redux";

import { getListClassDetail } from "api/class";

let videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

export const VideoCall2 = (props) => {
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    async (event) => {
      event.preventDefault();
      const response = await getListClassDetail();
      const imageSrc = webcamRef.current.getScreenshot();
    },
    [webcamRef]
  );

  return (
    <>
      <Webcam
        audio={false}
        height={370}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={370}
        videoConstraints={videoConstraints}
      />
    </>
  );
}



export default connect()(VideoCall2)