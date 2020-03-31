import React from "react";
import posed from "react-pose";
import SplitText from "react-pose-text";
import { Container, Row, Col } from "react-bootstrap";

export default () => {
  const charPoses = {
    exit: { x: 0, opacity: 500000 },
    enter: {
      x: -360,
      opacity: 100,
      transition: ({ wordIndex }) => ({
        type: "tween",
        delay: 1500
      })
    }
  };
  const charPoses2 = {
    exit: { x: 0, opacity: 500000 },
    enter: {
      x: 360,
      opacity: 100,
      transition: ({ wordIndex }) => ({
        type: "tween",
        delay: 1500
      })
    }
  };
  return (
    <div className="component first-component">
      <Container className="center-block" style={{ alignSelf: "center" }}>
        <Row fuild>
          <Col style={{ marginBottom: "30px", alignSelf: "left" }}>
            <h1 style={{ textAlign: "left" }}>ต้นทุนของ</h1>
          </Col>
        </Row>
        <Row>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              color: "#cfff3c",
              fontSize: "140px",
              fontFamily: "Pridi",
              fontWeight: "500px"
            }}
          >
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
              $ocial
            </SplitText>
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses2}>
              Distancing
            </SplitText>
          </div>
        </Row>
        {/* <h1 style={{ color: '#cfff3c', fontWeight: '800', }}>SOCIAL DISTANCING</h1> */}
      </Container>
    </div>
  );
};
