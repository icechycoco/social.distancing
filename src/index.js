import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import FullPage from "./FullPage";
import PageContain from "./PageContain";

import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// class Demo extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1 className="title">React Page Scroller Demo</h1>
//         <div className="links">
//           <div className="link">
//             <Link to="/fullpage">Full page demo</Link>
//           </div>
//           <div className="link">
//             <Link to="/contain">Page contain demo</Link>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Router basename="/demos">
//     <div>
//       <Switch>
//         <Route exact path="/" component={Demo} />
//         <Route path="/fullpage" component={FullPage} />
//         <Route path="/contain" component={PageContain} />
//       </Switch>
//     </div>
//   </Router>,
//   document.getElementById("root"),
// );

ReactDOM.render(
  <React.StrictMode>
    <FullPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
