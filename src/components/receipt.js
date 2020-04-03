import React from "react";
import { Container } from "react-bootstrap";
import AppContext from '../AppContext';

const cal = input => {
  const food = parseInt(input.food * 30 || "0", 10)
  const transport = parseInt(input.transport * 30 || "0", 10)
  const home = parseInt(input.home || "0", 10)
  return food + transport + home + 300 + 220 + 900
}

export default () => {
  return (
    <AppContext.Consumer>
      {context => (
        <div className="receipt">
          <div className="paper">
            <h1 style={{
              color: 'black', fontSize: "40px",
            }}>ใบเสร็จ</h1>
            < div className="event" > 31 มีนาคม 2563</div>
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
              <dt>ค่าอาหาร</dt>
              <dd>{context.input.food * 30} บาท</dd>
              <dt>ค่าเดินทาง</dt>
              <dd>{context.input.transport * 30} บาท</dd>
              <dt>ค่าที่พัก</dt>
              <dd>{context.input.home * 1} บาท</dd>
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
              {/* <dt>Vat7%:</dt>
              <dd>120 บาท</dd> */}
              <dt>Total:</dt>
              <dd>{cal(context.input)} บาท</dd>
            </dl>
            <dl>
              {/* <dt>Requesting Receipt:</dt>
              <dd>John Doe, john.doe@gmail.com</dd> */}
            </dl>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};
