import React from "react";
import { Container, Col, Row } from "react-bootstrap"

export default () => {
  return (
    <div className="component eighth-2-component">
      <Container className="center-block" style={{ alignSelf: 'center', }}>
        <Col>
          <h2>คุณป้า พนักงานทำความสะอาด</h2>
          <h3>รายได้ 330 บาท/วัน (รายได้ขั้นต่ำ)
          แรงงานนอกระบบ
          </h3>
        </Col>
        <Col>
          <h3 style={{ backgroundColor: '#cfff3c', color: 'black' }}>“ป้ามองว่า การกักตัวอยู่บ้าน มันคงทำไม่ได้ทุกคน คนที่พอมีเงิน มีทุนอยู่บ้าง เขาก็ยังสามารถอยู่บ้านได้ 14 วัน แต่สำหรับคนที่ไม่มีทุนอยู่เลย เพราะต้องหาวันกินวัน เขาจะอยู่ในบ้านเฉยๆ ทั้ง 14 วันมันคงยาก”</h3>
        </Col>
      </Container>
    </div>
  );
};