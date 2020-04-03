import React from "react";
import { Container, Row } from "react-bootstrap";
import Receipt from "../components/receipt";

export default () => {
  return (
    <div className="component twelveth-component">
      <Container className="center-block" style={{ alignSelf: "center" }}>
        <Row>
          <h3>นโยบายเยียวยาของรัฐที่ออกมากเพื่อช่วยเยียวยา มีถึง 30 มาตรการ</h3>
          <h3>แต่มีเพียง 4 มาตรการเท่านั้น ที่เป็นมาตรการ “ลดค่าใช้จ่าย” หรือ “เพิ่มรายได้” ให้กับกลุ่มแรงงานนอกระบบ</h3>
          <h3>ยกตัวอย่างเช่น มาตราการเยียวยา 5000 บาท</h3>
        </Row>
      </Container>
    </div>
  );
};
