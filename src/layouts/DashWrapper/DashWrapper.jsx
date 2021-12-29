import React, { useContext, useEffect } from "react";
import {
  useMatch,
  useMatches,
  useMatchRoute,
  useNavigate,
} from "react-location";
import { toast } from "react-toastify";
import styled, { ThemeProvider } from "styled-components";
import { acceptedRoutes } from "../../constants";
import { ThemeContext } from "../../contexts/themeContext";
import { GlobalStyles } from "../../globalStyles";
import { useUser } from "../../hooks/useUser";
import DashHeader from "../DashHeader/DashHeader";

const StyledGrid = styled.main`
  display: grid;
  grid-template-columns: 242px 1fr;

  .dash-body {
    background-color: ${(props) => props.theme.backgroundMain};
  }
`;

const DashWrapper = (props) => {
  const [theme, toggleTheme, themeStyles] = useContext(ThemeContext);
  const { query } = useUser();
  const navigate = useNavigate();
  const matchRoute = useMatches();

  useEffect(() => {
    if (query.data && !query.data.Profile.reddit_profile) {
      toast.warning("Please link your reddit account to your profile");
      navigate("/link-reddit");
    }
  }, [query.data, navigate]);

  return (
    <ThemeProvider
      theme={themeStyles}
      toggleTheme={toggleTheme}
      themeString={theme}
    >
      <GlobalStyles />

      <StyledGrid className=" w-full h-screen">
        <DashHeader theme={theme} toggleTheme={toggleTheme} />
        <section className="p-8 dash-body">{props.children}</section>
      </StyledGrid>
    </ThemeProvider>
  );
};

export default DashWrapper;
