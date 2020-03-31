import React from 'react'
import { Container, Row } from "react-bootstrap"
import Receipt from "../components/receipt";

export default () => {

  return (
    <div className="component twelveth-component">
      <Container className="center-block" style={{ alignSelf: 'center', }}>
        <Row>
          <h2>เราจะร่วมกันหาทางออกจากปัญหานี้ในระยะยาวได้อย่างไรบ้าง?</h2>
        </Row>
      </Container>
    </div>
  );
};