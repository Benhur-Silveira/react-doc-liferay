export const codeRoutes = `import React from "react";
import {
  Route,
  HashRouter as Router,
  Switch as Routes,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

export const AppRouter = ({ configuration }) => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          render={() => <Home configuration={configuration} />}
        />
        />
        <Route path="/about" render={() => <About />} />
      </Routes>
    </Router>
  );
};
`;

export const codeRoutesIndex = `import React from "react";
import ReactDOM from "react-dom";

import { AppRouter } from "./routes/routes";

export default function main(params) {
  ReactDOM.render(
    <AppRouter />,
    document.getElementById(params.portletElementId),
  );
}`;

export const codeRoutesAbout = `import React from "react";
import { useHistory } from "react-router-dom";
import { BTN_HOME } from "../languages/home";

export const About = () => {
  const navigate = useHistory();
  return (
    <div className={"d-flex flex-column"}>
      <h1>About</h1>
      <button onClick={() => navigate.push("/")}>{BTN_HOME}</button>
    </div>
  );
};`;

export const codeRoutesHome = `import React from "react";
import { useHistory } from "react-router-dom";
import { BTN_ABOUT } from "../languages/about";

export const Home = () => {
  const navigate = useHistory();
  return (
    <div className={"d-flex flex-column"}>
      <h1>Home</h1>
      <button onClick={() => navigate.push("/about")}>{BTN_ABOUT}</button>
    </div>
  );
};`;
