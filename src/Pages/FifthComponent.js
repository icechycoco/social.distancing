import React from "react";
import { Container } from "react-bootstrap"
import TextLoop from "react-text-loop";

export default () => {
  return (
    <div className="component fifth-component">
      <Container className="center-block" style={{ alignSelf: 'center', }}>
        <h1 style={{ marginBottom: '20px', }}>
          ซึ่งในขณะที่คุณกำลัง
          <TextLoop interval={800}>
            <span style={{ color: '#cfff3c' }}>Work from home</span>
            <span style={{ color: '#cfff3c' }}>ดู Netflix</span>
            <span style={{ color: '#cfff3c' }}>ฝึกทำอาหาร</span>
            <span style={{ color: '#cfff3c' }}>เรียนออนไลน์</span>
            <span style={{ color: '#cfff3c' }}>ใช้เวลากับครอบครัว</span>
            <span style={{ color: '#cfff3c' }}>สั่ง Delivery</span>
          </TextLoop>{" "}
        </h1>
      </Container>
    </div>
  );
};