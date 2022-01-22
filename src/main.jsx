import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Store from "./contexts/themeContext";
import { TabProvider } from "./contexts/tabContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Modal from "./layouts/Modal/Modal";
import ModalStore from "./stores/ModalStore";
import CustomSite from "./pages/CustomSite/CustomSite";
import SubmitStory from "./pages/CustomSite/SubmitStory";
import { Outlet, ReactLocation, Router } from "react-location";
import { routes } from "./routes/index.jsx";
import { ReactLocationDevtools } from "react-location-devtools";

const queryClient = new QueryClient();

const location = new ReactLocation();
const isProd = process.env.NODE_ENV === "production";

const App = () => {
  const excludedSubdomains = ["www", "localhost"];
  // get subdomain from url and exclude www from it
  const subdomain = window.location.hostname.split(".")[0].replace("www.", "");
  const domainList = window.location.hostname.split(".");
  // custom site
  if (
    isProd
      ? domainList.length === 3 && domainList[1] !== "netlify"
      : domainList.length === 2
  ) {
    return (
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <Store>
            <Modal ModalStore={ModalStore} />
            <Router
              location={location}
              routes={[
                {
                  path: "/",
                  element: <CustomSite subdomain={subdomain} />,
                },
                {
                  path: "/submit",
                  element: <SubmitStory subdomain={subdomain} />,
                },
              ]}
            />
          </Store>
        </QueryClientProvider>
      </React.StrictMode>
    );
  } else {
    // production site
    return (
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <Store>
            <Modal ModalStore={ModalStore} />
            <TabProvider>
              <Router location={location} routes={routes}>
                <Outlet />
                <ReactLocationDevtools initialIsOpen={false} />
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
