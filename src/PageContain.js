import React from "react";
import { Pagination } from "react-bootstrap";

import ReactPageScroller from "react-page-scroller";
import FirstComponent from "../src/Pages/FirstComponent";
import SecondComponent from "../src/Pages/SecondComponent";
// import ThirdComponent from "./ThirdComponent";
// import FourthComponent from "./FourthComponent";
// import FifthComponent from "./FifthComponent";

import "./index.css";

export default class PageContain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <Pagination.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
          {i}
        </Pagination.Item>,
      );
    }

    return [...pageNumbers];
  };

  render() {
    const pagesNumbers = this.getPagesNumbers();

    return (
      <div className="demo-page-contain">
        <h3 className="demo-page-contain__hint">
          You need to focus or hover page scroller to make scroll, keys or touch
          work
        </h3>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          containerWidth={window.innerWidth * 0.4}
          containerHeight={window.innerHeight * 0.5}
          customPageNumber={this.state.currentPage}
        >
          <FirstComponent />
          <SecondComponent />
          {/* <ThirdComponent />
          <FourthComponent />
          <FifthComponent /> */}
        </ReactPageScroller>
        <Pagination className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
        </Pagination>
      </div>
    );
  }
}