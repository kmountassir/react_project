import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Redirect } from "react-router-dom";
import SlideShow from "./components/SlideShow/index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const Index = () => (
  <div>
    <HashRouter>
      <Route path="/:page" component={SlideShow} />
      <Redirect from="/" to="/1" />
    </HashRouter>
  </div>
);
ReactDOM.render(<Index />, document.getElementById("root"));
