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
    <div className="component ninth-component">
      <Container className="center-block" style={{ alignSelf: 'center', }}>
        {/* <Grid> */}
        < Col style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#cfff3c' }}>กรอกข้อมูลคุณดูสิ</h2>
        </Col >
        <Col >
          <Form style={{ width: '600px' }} className="center-block" onSubmit={handleSubmit(onSubmit)}>
            <FormGroup controlId="formBasicFood" style={{ marginBottom: '20px', }}>
              <Col><p className='text-input'>ค่าอาหาร</p></Col>
              <Col>
                <RHFInput
                  as={<FormControl style={{ height: '60px' }} type="text" placeholder="ค่าอาหารต่อวัน" />}
                  rules={{ required: true }}
                  name="inputFood"
                  register={register}
                  setValue={setValue}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="formBasicHome" style={{ marginBottom: '20px', }}>
              <Col><p className='text-input'>ค่าเช่าบ้าน</p></Col>
              <Col>
                <RHFInput
                  as={<FormControl style={{ height: '60px' }} type="text" placeholder="ค่าเช่าบ้านต่อเดือน" />}
                  rules={{ required: true }}
                  name="inputHome"
                  register={register}
                  setValue={setValue}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="formBasicTransport" style={{ marginBottom: '20px', }}>
              <Col ><p className='text-input'>ค่าเดินทาง</p></Col>
              <Col>
                <RHFInput
                  as={<FormControl style={{ height: '60px' }} type="text" placeholder="ค่าเดินทางต่อวัน" />}
                  rules={{ required: true }}
                  name="inputTransport"
                  register={register}
                  setValue={setValue}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="formBasicMoney" style={{ marginBottom: '20px', }}>
              <Col><p className='text-input'>รายได้</p></Col>
              <Col>
                <RHFInput
                  as={<FormControl style={{ height: '60px' }} type="text" placeholder="เงินเดือน" />}
                  rules={{ required: true }}
                  name="inputMoney"
                  register={register}
                  setValue={setValue}
                />
              </Col>
            </FormGroup>
            <Button style={{ marginTop: '60px', height: '80px', width: '150px', backgroundColor: '#cfff3c' }} className="center-block" variant="primary" type="submit">
              <p style={{ fontSize: '20px', color: '#000000' }}>คำนวณ</p>
            </Button>
          </Form>
        </Col>
      </Container >
    </div >
  );
};