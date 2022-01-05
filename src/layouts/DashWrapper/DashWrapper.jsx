import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-location";
import { toast } from "react-toastify";
import styled, { ThemeProvider } from "styled-components";
import Loader from "../../components/Loader/Loader";
import { ThemeContext } from "../../contexts/themeContext";
import { GlobalStyles } from "../../globalStyles";
import { useStripe } from "../../hooks/useStripe";
import { useUser } from "../../hooks/useUser";
import DashHeader from "../DashHeader/DashHeader";
import { canAccessRoute } from "../../utils/canAccessRoute";

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
  const {
    stripePlan: { data, isLoading },
  } = useStripe();

  useEffect(() => {
    if (query.isSuccess && !query.data.Profile.reddit_profile) {
      toast.warning("Please link your reddit account to your profile");
      navigate({ to: "/dashboard/settings/profile" });
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
        {isLoading && <Loader />}
        {!isLoading && data && (
          <>
            <section className="p-8 dash-body">
              {canAccessRoute(data.subscription).status ? (
                <>{props.children}</>
              ) : (
                <>
                  <p className="text-3xl font-bold text mb-4">
                    Something's gone wrong
                  </p>
                  <p className="text-light ">
                    {canAccessRoute(data.subscription).error}. Please head to
                    your{" "}
                    <Link
                      className="underline text-accent-primary"
                      to="/dashboard/settings/subscription"
                    >
                      subscription
                    </Link>{" "}
                    page to fix.
                  </p>
                </>
              )}
            </section>
          </>
        )}
      </StyledGrid>
    </ThemeProvider>
  );
};

export default DashWrapper;
