import React from "react";
// import { Pagination } from "react-bootstrap";

import ReactPageScroller from "react-page-scroller";
import FirstComponent from "../src/Pages/FirstComponent";
import SecondComponent from "../src/Pages/SecondComponent";
import ThirdComponent from "../src/Pages/ThirdComponent";
import FourthComponent from "../src/Pages/FourthComponent";
import FifthComponent from "../src/Pages/FifthComponent";
import SixthComponent from "../src/Pages/SixthComponent";
import SeventhComponent from "../src/Pages/SeventhComponent";
import EighthComponent from "../src/Pages/EighthComponent";
import EighthOneComponent from "../src/Pages/EighthOneComponent";
import EighthTwoComponent from "../src/Pages/EighthTwoComponent";
import EighthThreeComponent from "../src/Pages/EighthThreeComponent";
import NinthComponent from "../src/Pages/NinthComponent";
import TenthComponent from "../src/Pages/TenthComponent";
import EleventhComponent from "../src/Pages/EleventhComponent";
import TwelvethComponent from "../src/Pages/TwelvethComponent";

// import "./index.css";

export default class FullPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
  };

  // getPagesNumbers = () => {
  //   const pageNumbers = [];

  //   for (let i = 1; i <= 5; i++) {
  //     pageNumbers.push(
  //       <Pagination.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
  //         {i}
  //       </Pagination.Item>,
  //     );
  //   }

  //   return [...pageNumbers];
  // };

  render() {
    // const pagesNumbers = this.getPagesNumbers();

    return (
      <React.Fragment>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
        // animationTimer={900}
        >
          {/* <p className="test-style text-center">test test test</p> */}
          <FirstComponent />
          <SecondComponent />
          <ThirdComponent />
          <FourthComponent />
          <SixthComponent />
          <FifthComponent />
          <SeventhComponent />
          <EighthOneComponent />
          <EighthTwoComponent />
          {/* <EighthThreeComponent /> */}
          <NinthComponent />
          <TenthComponent />
          <EleventhComponent />
          <TwelvethComponent />
        </ReactPageScroller>
        {/* <Pagination className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
        </Pagination> */}
      </React.Fragment>
    );
  }
}