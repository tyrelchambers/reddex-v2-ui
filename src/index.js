import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DASHBOARD, INDEX, LOGIN, REGISTER } from "./routes/index.routes";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Store from "./contexts/themeContext";
import ReadingList from "./pages/Dashboard/ReadingList";
import { TabProvider } from "./contexts/tabContext";

const App = () => {
  return (
    <React.StrictMode>
      <Store>
        <TabProvider>
          <Router>
            <Routes>
              <Route path={LOGIN} element={<Login />} />
              <Route path={INDEX} element={<Home />} />
              <Route path={REGISTER} element={<Register />} />
              <Route path={DASHBOARD} element={<ReadingList />} />
            </Routes>
          </Router>
        </TabProvider>
      </Store>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
