import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { RHFInput } from 'react-hook-form-input';
// import '../styles/main.scss'
import { Form, FormGroup, FormLabel, FormControl, FormText, Container, Row, Col, Button } from "react-bootstrap"

export default () => {
  const { handleSubmit, register, setValue, errors } = useForm();

  const onSubmit = values => {
    console.log(values);
  };

  return (
    // <div className="component sixth-component">
    <Container style={{ flex: 1, }}>
      {/* <Grid> */}
      <Row size='20'>
        <h1>กรอกข้อมูลคุณดูสิ</h1>
      </Row>
      <Row size='80' style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginHorizontal: '20px', }}>
        <Form horizontal style={{ width: '600px' }} className="center-block" onSubmit={handleSubmit(onSubmit)}>
          <FormGroup controlId="formBasicFood" style={{ marginVertical: '20px', }}>
            <Col>ค่าอาหาร</Col>
            <Col>
              <RHFInput
                as={<FormControl style={{ height: '60px' }} type="text" placeholder="ค่าอาหารต่อวัน" />}
                rules={{ required: true }}
                name="aaa"
                register={register}
                setValue={setValue}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formBasicHome">
            <Col>ค่าเช่าบ้าน</Col>
            <Col><FormControl style={{ height: '60px' }} type="text" placeholder="ค่าเช่าบ้านต่อเดือน" /></Col>
          </FormGroup>
          <FormGroup controlId="formBasicTransport">
            <Col>ค่าเดินทาง</Col>
            <Col><FormControl style={{ height: '60px' }} type="text" placeholder="ค่าเดินทางต่อวัน" /></Col>
          </FormGroup>
          <FormGroup controlId="formBasicHome">
            <Col>รายได้</Col>
            <Col><Form.Control style={{ height: '60px' }} type="text" placeholder="เงินเดือน" /></Col>
          </FormGroup>
          <Button variant="primary" type="submit">
            คำนวณ
        </Button>
        </Form>
      </Row>
    </Container >
    // </div >
  );
};