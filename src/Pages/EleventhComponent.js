import React from "react";
import { Container } from "react-bootstrap";
import ReactApexChart from 'react-apexcharts';
import data from "../../src/income.json";


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


class EleventhComponent extends React.Component {

  state = {
    series: [
      {
        name: 'userA',
        data: A
      },
      {
        name: 'userB',
        data: B
      },
      {
        name: 'userC',
        data: C
      },
      {
        name: 'userD',
        data: D
      }
    ],
    options: {
      chart: {
        height: 1000,
        type: 'line',
        id: 'areachart-2'
      },
      colors: ['#cfff3c', '#ff4379', '#ff4379', '#f0f0f0'],
      annotations: {
        yaxis: [{
          y: 34625,
          y2: -11710,
          borderColor: '#000',
          fillColor: 'white',
          opacity: 0.2,
          label: {
            borderColor: '#333',
            style: {
              fontSize: '30px',
              color: 'black',
              background: '#cfff3c',
              fontFamily: 'Pridi',
            },
            text: 'แกบระหว่างรายได้',
          }
        }],
        xaxis: [{
          x: '20 Mar',
          stroke: 3,
          borderColor: '#ff4379',
          label: {
            borderColor: '#ff4379',
            style: {
              color: 'white',
              background: '#ff4379',
              fontSize: '30px',
              fontFamily: 'Pridi',
            },
            text: 'ประกาศหยุดงาน',
          }
        }],
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        width: 8,
      },
      grid: {
        show: true,
        borderColor: 'white',
        stroke: 2,
        padding: {
          right: 30,
          left: 20
        }
      },
      labels: dates,
      xaxis: {
        type: 'date',
        seriesName: 'วันที่',
        labels: {
          show: true,
          rotate: -30,
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false,
          trim: true,
          minHeight: undefined,
          maxHeight: 120,
          style: {
            colors: 'white',
            fontSize: '20px',
            fontFamily: 'Pridi',
            // fontWeight: 400,
            cssClass: 'apexcharts-xaxis-label',
          },
          range: 4,
        }
      },
      yaxis: {
        // type: 'date',
        seriesName: 'บาท',
        labels: {
          show: true,
          // rotate: -45,
          // rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false,
          trim: true,
          minHeight: undefined,
          maxHeight: 120,
          style: {
            colors: 'white',
            fontSize: '30px',
            fontFamily: 'Pridi',
            // fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label',
          },
          // range: 4,
        }
      },
    },
  };

  render() {

    return (
      <div className="component third-component">
        <Container className="center-block" style={{ alignSelf: 'center' }}>
          <h2>ลองดูกราฟเปรียบเทียบดูสิ</h2><br />
          <div style={{ width: '1500px' }}>
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={1500} />
          </div>
        </Container>
      </div>
    );
  }
}

export default EleventhComponent;


