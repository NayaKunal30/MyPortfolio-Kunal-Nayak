import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ marginTop: -50 , textAlign: "left" }}>
      <Typewriter
        options={{
          strings: [
            "Machine Learning Developer",
            "Freelancer",
            "MERN Stack Developer",
            "Modern UI/UX FIGMA Developer",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          fontSize: 20,
        }}
      />
    </div>
  );
}

export default Type;
