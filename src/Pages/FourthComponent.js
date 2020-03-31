import React from "react";
import { Container } from "react-bootstrap"

export default () => {
  return (
    <div className="component fourth-component">
      <Container className="center-block" style={{ alignSelf: 'center', }}>
        <h2>รายจ่ายของคนกรุงเทพ /เดือน</h2><br />
        <h2>ตัวเลขจากสำนักงานสถิติแห่งชาติ รายจ่ายเฉลี่ยต่อครัวเรือนของคนกรุงเทพ อยู่ที่ 31,209 บาท ต่อครัวเรือน</h2>
      </Container>
    </div>
  );
};