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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useExpand } from "../../hooks/useExpand";
import reddexDark from "../../assets/images/reddex-dark.svg";
import reddexLight from "../../assets/images/reddex-light.svg";

const StyledGrid = styled.main`
  display: grid;

  .dash-body {
    background-color: ${(props) => props.theme.backgroundMain};
  }

  @media screen and (min-width: 1025px) {
    grid-template-columns: 242px 1fr;
  }
`;

const DashWrapper = (props) => {
  const [theme, toggleTheme, themeStyles] = useContext(ThemeContext);
  const { query } = useUser();
  const navigate = useNavigate();
  const {
    stripePlan: { data, isLoading },
  } = useStripe();
  const { open, setOpen } = useExpand();

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

      <StyledGrid className=" w-full h-screen grid-cols-1">
        <DashHeader
          theme={theme}
          toggleTheme={toggleTheme}
          open={open}
          setOpen={setOpen}
        />

        {isLoading && <Loader size="2x" />}
        {!isLoading && data && (
          <>
            <section className="p-4 sm:p-8 dash-body">
              {canAccessRoute(data.subscription).status ? (
                <div className="flex flex-col">
                  <header className="flex items-center w-full justify-between mb-6 lg:hidden">
                    <Link to="/">
                      <img
                        src={theme === "light" ? reddexDark : reddexLight}
                        alt="Reddex"
                        className="w-14 h-14"
                      />
                    </Link>
                    <FontAwesomeIcon
                      icon={faBars}
                      className="text-2xl text "
                      onClick={() => setOpen(true)}
                    />
                  </header>
                  {props.children}
                </div>
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
