import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Newbie Developer",
          "Freelancer",
          "Open Source Contributor",
          "Kang VPN",
          "Gretonger",
          "Kang Tutor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
