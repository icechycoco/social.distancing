import React from "react";
import { Container, Row } from "react-bootstrap";
import "../receipt.css";
import Receipt from "../components/receipt";

export default () => {
  return (
    <div className="component tenth-component">
      <Container className="center-block" style={{ alignSelf: "center" }}>
        <Row>
          <h2>นี่เป็นค่าใช้จ่ายของคุณใน 1 เดือน</h2>
        </Row>
        <Row >
          <Receipt style={{ margin: "auto" }} />
        </Row>
        <Row>
          {/* <h3>ซึ่งรายการข้างต้นยังไม่รวมค่าแอลกอฮอล์ล้างมือ/ หน้ากากอนามัย/ ค่าไฟจากการฟังแถลงที่ไม่รู้เรื่อง/ ค่าประกันโควิด ...</h3> */}
        </Row>
      </Container>
    </div>
  );
};
