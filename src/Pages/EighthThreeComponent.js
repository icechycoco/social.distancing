import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import data from "../../src/income.json";
import { Container } from "react-bootstrap"


// var lenght = Object.keys(data.data).length;
console.log('print', data.data);
console.log('print1', Object.keys(data.data).length);
console.log('print2', data.data[0].userA)

const dates = [];
for (let i = 0; i < Object.keys(data.data).length; i++) {
  dates.push(
    data.data[i].day,
  );
}

const A = [];
for (let i = 0; i < Object.keys(data.data).length; i++) {
  A.push(
    data.data[i].userA,
  );
}

const B = [];
for (let i = 0; i < Object.keys(data.data).length; i++) {
  B.push(
    data.data[i].userB,
  );
}


const C = [];
for (let i = 0; i < Object.keys(data.data).length; i++) {
  C.push(
    data.data[i].userC,
  );
}


const D = [];
for (let i = 0; i < Object.keys(data.data).length; i++) {
  D.push(
    data.data[i].userD,
  );
}


class EighthThreeComponent extends React.Component {

  state = {
    dataLine: {
      // labels: ["January", "February", "March", "April", "May", "June", "July"],
      labels: dates,
      datasets: [
        {
          label: "Salary Man",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          // pointBorderColor: "rgb(205, 130,1 58)",
          // pointBackgroundColor: "rgb(255, 255, 255)",
          // pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          // data: [65, 59, 80, 81, 56, 55, 40]
          data: A
        },
        {
          label: "ลูกจ้างรายวัน",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          // pointBorderColor: "rgb(35, 26, 136)",
          // pointBackgroundColor: "rgb(255, 255, 255)",
          // pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          // data: [28, 48, 40, 19, 86, 27, 90]
          data: B
        },
        {
          label: "คนขับแท็กซี่",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "green",
          borderColor: "green",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          // pointBorderColor: "rgb(35, 26, 136)",
          // pointBackgroundColor: "rgb(255, 255, 255)",
          // pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          // data: [28, 48, 40, 19, 86, 27, 90]
          data: C
        },
        {
          label: "หนีกลับบ้าน",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "red",
          borderColor: "red",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          // pointBorderColor: "rgb(35, 26, 136)",
          // pointBackgroundColor: "rgb(255, 255, 255)",
          // pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          // data: [28, 48, 40, 19, 86, 27, 90]
          data: D
        }
      ]
    }
  };

  render() {

    return (
      <div className="component sixth-component">
        <Container className="center-block" style={{ alignSelf: 'center' }}>
          <MDBContainer>
            <h2 style={{ marginBottom: '40px' }}>ลองมาเปรียบเทียบค่าใช้จ่ายดู</h2>
            <Line data={this.state.dataLine} options={{ responsive: true }} style={{ color: 'white' }} />
          </MDBContainer>
        </Container>
      </div>
    );
  }
}

export default EighthThreeComponent;