import React from "react";
import { Container } from "react-bootstrap";

export default () => {
  return (
    <div className="receipt">
      <div className="paper">
        <h1 style={{
          color: 'black', fontSize: "40px",
        }}>ใบเสร็จ</h1>
        < div className="event" > 31 มีนาคม 2020</div>
        <dl className="list">
          <dt>Order #:</dt>
          <dd>7yVSwQAE</dd>
          <dt>Date of Purchase:</dt>
          <dd>31/03/2020</dd>
          {/* <dt>Credit Card:</dt>
          <dd>*************1234</dd>
          <dt>Credit Card Type:</dt>
          <dd>MasterCard</dd> */}
          <dt> </dt>
          <dd> </dd>
          <dt>อาหาร x 31</dt>
          <dd>3000 บาท</dd>
          <dt>เดินทาง x 20</dt>
          <dd>1500 บาท</dd>
          <dt>ที่อยู่ x 31</dt>
          <dd>5000 บาท</dd>
          <dt>เบ็ดเตล็ด x 31</dt>
          <dd>349 บาท</dd>
          <dt>หน้ากากอนามัย</dt>
          <dd>300 บาท</dd>
          <dt>เจลล้างมือ</dt>
          <dd>220 บาท</dd>
          <dt>ประกันโควิด</dt>
          <dd>900 บาท</dd>
          <dt>{}</dt>
          <dd>{}</dd>
        </dl>
        <dl className="total">
          <dt>Total:</dt>
          <dd>12000 บาท</dd>
          <dt>Vat7%:</dt>
          <dd>120 บาท</dd>
        </dl>
        <dl>
          {/* <dt>Requesting Receipt:</dt>
          <dd>John Doe, john.doe@gmail.com</dd> */}
        </dl>
      </div>
    </div>
  );
};
