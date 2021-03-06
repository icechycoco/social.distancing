import React from "react";
import { Container, Col, Row } from "react-bootstrap";

export default () => {
  return (
    // <div >
    <div className="component eighth-2-component">
      <Container className="center-block" style={{ alignSelf: "center" }}>
        <Col>
          <h2>พี่คนขับรถแทกซี่</h2>
          <h3>รายได้ 1200 บาท/วัน</h3>
        </Col>
        <Col>
          <h3 style={{ backgroundColor: "#ff4379", color: "white" }}>
            "แต่ก่อนเคยรับนักท่องเที่ยวจีนได้อย่างน้อยหนึ่งเที่ยวทุกคืน
              เด๋วนี้ไม่มีนักท่องเที่ยวเลย คนเดินทางทั่วไปยังไม่ค่อยมี 3
              เดือนมานี้ ผู้โดยสารลดลงไปเยอะมาก ส่วนเดือนนี้รายได้หายไปเกินครึ่ง”
        </h3>
        </Col>
      </Container>
    </div>
  );
};
