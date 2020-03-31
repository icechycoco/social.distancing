import React from "react";
import { Container } from "react-bootstrap";
import ReactApexChart from 'react-apexcharts';


class ThirdComponent extends React.Component {

  state = {
    series: [40, 60],
    options: {
      chart: {
        width: 800,
        type: 'pie',
      },
      stroke: {
        show: false
      },
      colors: ['#cfff3c', '#ff4379'],
      labels: ['Team A', 'Team B'],
      dataLabels: {
        enabled: true,
        enabledOnSeries: undefined,
        textAnchor: 'middle',
        style: {
          fontSize: '30px',
          fontFamily: 'Pridi',
          fontWeight: 'bold',
        }
      },
      responsive: [{
        breakpoint: 900,
        options: {
          chart: {
            width: 400,
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  };

  render() {

    return (
      <div className="component third-component">
        <Container className="center-block" style={{ alignSelf: 'center' }}>
          <h2>อัตราส่วนของคนที่เข้ามาเป็นแรงงานในกรุงเทพ</h2><br />
          <div>
            <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={800} />
          </div>
          <h3>ค่าครองชีพเฉลี่ยในกรุงเทพ</h3>
          <h3><span style={{ color: '#ff4379' }}>xxx</span>{' '}บาท</h3>
          <h3>ค่าจ้างขั้นต่ำรายวัน</h3>
          <h3><span style={{ color: '#cfff3c' }}>xxx</span>{' '}บาท</h3>
        </Container>
      </div>
    );
  }
}

export default ThirdComponent;
