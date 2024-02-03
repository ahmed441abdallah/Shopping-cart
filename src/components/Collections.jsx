import React from "react";
import intro from "../imgs/_import_60cc31378b8377.81258707.mp4";

const Collections = () => {
  return (
    <div className="video-container">
      <video controls>
        <source src={intro} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Collections;
