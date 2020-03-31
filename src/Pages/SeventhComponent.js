import React from "react";
import { Container } from "react-bootstrap";
import TextLoop from "react-text-loop";

export default () => {
  return (
    <div className="component seventh-component">
      <Container className="center-block" style={{ alignSelf: "center" }}>
        <h1 style={{ marginBottom: "20px" }}>
          ยังมีอีกหลายคนที่
          <TextLoop interval={800}>
            <span style={{ color: "#ff4379" }}>ไปทำงานไม่ได้</span>
            <span style={{ color: "#ff4379" }}>ขาดรายได้</span>
            <span style={{ color: "#ff4379" }}>โดนไล่ออกจากงาน</span>
            <span style={{ color: "#ff4379" }}>ไม่มีเงินจ่ายค่าบ้าน</span>
            <span style={{ color: "#ff4379" }}>ไม่มีเงินซื้อข้าว</span>
            <span style={{ color: "#ff4379" }}>โดนลดเงินเดือน</span>
          </TextLoop>{" "}
        </h1>
      </Container>
    </div>
  );
};
