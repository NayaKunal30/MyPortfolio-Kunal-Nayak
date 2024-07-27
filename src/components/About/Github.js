import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My Coding <strong style={{ color: "#48D1CC" }}>History</strong>
      </h1>
      <GitHubCalendar
        username="NayaKunal30"
        blockSize={15}
        blockMargin={5}
        color="#0097A7"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
