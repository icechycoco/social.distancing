import React from 'react'
import { Container } from "react-bootstrap"

export default () => {

  return (
    <div className='announce'>
      <div className='paper'>
        <h1 style={{ color: 'black' }}>ใบสั่ง</h1>
        <h2 className='event'>ประกาศปิดสถานประกอบการชั่วคราวดังต่อไปนี้</h2>
        <dl>
          <dt>ใบสั่งที่:</dt>
          <dd>0000001</dd>
          <dt>ออก ณ วันที่:</dt>
          <dd>3/21/2020</dd>
        </dl>
        <dl>
          <dt>ห้างสรรพสินค้า</dt>
          <dd></dd>
          <dt>ตลาดนัด</dt>
          <dd></dd>
          <dt>ร้านอาหาร</dt>
          <dd></dd>
          <dt>ร้านเสริมสวย คลีนิกความงาม</dt>
          <dd></dd>
          <dt>สวนสนุก ลานโบลลิ่ง</dt>
          <dd></dd>
          <dt>ร้านเกม ร้านอินเตอร์เน็ต</dt>
          <dd></dd>
          <dt>สนามกอล์ฟ</dt>
          <dd></dd>
          <dt>สระว่ายน้ำ</dt>
          <dd></dd>
          <dt>ลานประชุม ลานแสดงสินค้า</dt>
          <dd></dd>
          <dt>สถานศึกษา กวดวิชา</dt>
          <dd></dd>
          <dt>สปา อาบอบนวด</dt>
          <dd></dd>
          <dt>ฟิตเนต สนามกีฬา</dt>
          <dd></dd>
          <dt>ลานมวย</dt>
          <dd></dd>
        </dl>
        <dl className='total'>
          {/* <dt>รวม:</dt>
          <dd>22 วัน</dd>
          <dt>Tax:</dt>
          <dd>99 euros</dd> */}
        </dl>
        <dl>
          <dt>ออกโดย:</dt>
          <dd>ผู้ว่าราชการจังหวัดกรุงเทพมหานคร</dd>
        </dl>
      </div>
    </div>
  );
};