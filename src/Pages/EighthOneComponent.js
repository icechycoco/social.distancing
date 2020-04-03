import React from "react";
import { Container, Col, Row } from "react-bootstrap";

export default () => {
  return (
    // <div >
    <Container className="component eighth-1-component">
      <Col className="center-block" style={{ marginRight: "auto", width: "800px" }}>
        <h1 style={{ colot: 'black' }}>พี่คนขับรถแทกซี่ </h1>
        <h2>รายได้ xxx บาท/วัน</h2>
      </Col>
      <Col className="center-block" style={{ marginLeft: "auto", width: "800px" }}>
        <h2 style={{ lineHight: '2', backgroundColor: "#ff4379", color: "white", }}>
          "แต่ก่อนเคยรับนักท่องเที่ยวจีนได้อย่างน้อยหนึ่งเที่ยวทุกคืน
          เด๋วนี้ไม่มีนักท่องเที่ยวเลย คนเดินทางทั่วไปยังไม่ค่อยมี 3
          เดือนมานี้ ผู้โดยสารลดลงไปเยอะมาก ส่วนเดือนนี้รายได้หายไปเกินครึ่ง”
          </h2>
      </Col>
    </Container>
    // </div >
  );
};
