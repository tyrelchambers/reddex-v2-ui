import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  CALLBACK_EMAIL,
  CALLBACK_REDDIT,
  DASHBOARD,
  DASHBOARD_DETAIL,
  DASHBOARD_PAGE,
  DASHBOARD_THIRD,
  INDEX,
  LINK_REDDIT,
  LOGIN,
  REGISTER,
  STORY,
} from "./routes/index.routes";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Store from "./contexts/themeContext";
import { TabProvider } from "./contexts/tabContext";
import Index from "./pages/Dashboard/Index";
import LinkReddit from "./pages/LinkReddit/LinkReddit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import CallbackReddit from "./pages/CallbackReddit";
import Modal from "./layouts/Modal/Modal";
import ModalStore from "./stores/ModalStore";
import CallbackConfirmEmail from "./pages/CallbackConfirmEmail";
import CustomSite from "./pages/CustomSite/CustomSite";
import SubmitStory from "./pages/CustomSite/SubmitStory";

const queryClient = new QueryClient();

const App = () => {
  const excludedSubdomains = ["www", "localhost"];
  // get subdomain from url and exclude www from it
  const subdomain = window.location.hostname.split(".")[0].replace("www.", "");

  if (!excludedSubdomains.includes(subdomain)) {
    return (
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <Store>
            <Modal ModalStore={ModalStore} />
            <TabProvider>
              <Router>
                <Routes>
                  <Route
                    path="/"
                    element={<CustomSite subdomain={subdomain} />}
                  />
                  <Route
                    path="/submit"
                    element={<SubmitStory subdomain={subdomain} />}
                  />
                </Routes>
              </Router>
            </TabProvider>
          </Store>
        </QueryClientProvider>
      </React.StrictMode>
    );
  } else {
    return (
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <Store>
            <Modal ModalStore={ModalStore} />
            <TabProvider>
              <Router>
                <Routes>
                  <Route path={LOGIN} element={<Login />} />
                  <Route path={INDEX} element={<Home />} />
                  <Route path={REGISTER} element={<Register />} />
                  <Route path={DASHBOARD} element={<Index />} />
                  <Route path={DASHBOARD_PAGE} element={<Index />} />
                  <Route path={DASHBOARD_DETAIL} element={<Index />} />
                  <Route path={DASHBOARD_THIRD} element={<Index />} />
                  <Route path={LINK_REDDIT} element={<LinkReddit />} />
                  <Route path={CALLBACK_REDDIT} element={<CallbackReddit />} />
                  <Route
                    path={CALLBACK_EMAIL}
                    element={<CallbackConfirmEmail />}
                  />
                </Routes>
              </Router>
            </TabProvider>
          </Store>
        </QueryClientProvider>
      </React.StrictMode>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
