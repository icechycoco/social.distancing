import React from "react";
import TextLoop from "react-text-loop";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

// import '../styles/main.scss'
import { Container, Row, Col, Button } from "react-bootstrap";
import { color } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3),
    fontFamily: "Pridi",
    fontSize: "30px"
  }
}));

const calc = state => {
  let sum = 0;
  const { i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, iFixed } = state;
  if (i1) {
    sum += 900
  }
  if (i2) {
    sum += 10
  }
  return sum
}

export default () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    i1: true,
    i2: false,
    i3: false,
    i4: false,
    i5: false,
    i6: false,
    i7: false,
    i8: false,
    i9: false,
    i10: false,
    i11: false,
    iFixed: false
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, iFixed } = state;
  const error =
    [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, iFixed].filter(v => v)
      .length !== 2;

  return (
    <div className="component second-component">
      <Container fluid className="center-block" style={{ alignSelf: "center" }}>
        <Row>
          <Col style={{ marginBottom: "50px" }}>
            <h3>รายการสินค้าเพื่อสุขภาพและความปลอดภัยสำหรับคุณ</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormControl style={{ marginLeft: "50px" }}>
              <FormControlLabel
                control={
                  <Checkbox checked={i1} onChange={handleChange} name="i1" />
                }
                label={<p className="text-info">{`${i1 ? 'B' : 'หน้ากากอนามัย 900'}`}</p>}
              />
              <FormControlLabel
                control={
                  <Checkbox checked={i2} onChange={handleChange} name="i2" />
                }
                label={<p className="text-info">เจลล้างมือ 10</p>}
              />
              <FormControlLabel
                control={
                  <Checkbox checked={i3} onChange={handleChange} name="i3" />
                }
                label={<p className="text-info">แอลกอฮอล์แบบขวด</p>}
              />
              <FormControlLabel
                control={
                  <Checkbox checked={i4} onChange={handleChange} name="i4" />
                }
                label={<p className="text-info">ไข่ไก่</p>}
              />
              <FormControlLabel
                control={
                  <Checkbox checked={i5} onChange={handleChange} name="i5" />
                }
                label={<p className="text-info">สบู่ฆ่าเชื้อโรค</p>}
              />
              <FormControlLabel
                control={
                  <Checkbox checked={i6} onChange={handleChange} name="i6" />
                }
                label={<p className="text-info">รถทัวร์กลับต่างจังหวัด</p>}
              />
              <FormControlLabel
                control={
                  <Checkbox checked={i7} onChange={handleChange} name="i7" />
                }
                label={<p className="text-info">ค่าอาหารดิลิเวอร์รี่</p>}
              />
              <FormControlLabel
                control={
                  <Checkbox checked={i8} onChange={handleChange} name="i8" />
                }
                label={<p className="text-info">ค่ารักษาพยาบาล</p>}
              />
              <FormControlLabel
                control={
                  <Checkbox checked={i9} onChange={handleChange} name="i9" />
                }
                label={<p className="text-info">ค่าประกันCovid-19</p>}
              />
              <FormControlLabel
                control={
                  <Checkbox checked={i10} onChange={handleChange} name="i10" />
                }
                label={<p className="text-info">ค่าไฟ</p>}
              />
              <FormControlLabel
                control={
                  <Checkbox checked={i11} onChange={handleChange} name="i11" />
                }
                label={<p className="text-info">ค่าอินเตอร์เน็ต</p>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={iFixed}
                    onChange={handleChange}
                    name="iFixed"
                    disabled
                  />
                }
                label={<p className="text-info">ค่าครองชีพในกรุงเทพ</p>}
              />
            </FormControl>
          </Col>
          <span>
            <p className="text-info" style={{ marginLeft: "50px" }}>
              รวมทั้งสิ้น
            </p>
            <p className="text-info" style={{ marginLeft: "50px" }}>
              {calc(state)}
              บาท
            </p>
          </span>
        </Row>
      </Container>
    </div>
  );
};
