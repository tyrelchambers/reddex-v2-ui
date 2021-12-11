import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useCustomWebsite } from "../../hooks/useCustomWebsite";
import Loader from "../../components/Loader/Loader";
import SiteSocials from "../../components/SiteSocials/SiteSocials";
import { Link } from "react-router-dom";
import { GlobalStyles } from "../../globalStyles";
import { ThemeContext } from "../../contexts/themeContext";
import YouTube from "react-youtube";

const StyledWrapper = styled.section`
  .link {
    color: ${(props) => props.theme.textLight};
  }

  .hero {
    aspect-ratio: 16/9;
    width: 100%;
    height: 500px;
    object-fit: cover;
    overflow: hidden;
  }

  .bio {
    background: ${(props) => props.theme.backgroundMain};
    margin-top: -3em;
    position: relative;
    z-index: 2;

    width: 100%;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  .header {
    color: ${(props) => props.theme.text};
  }

  .description {
    color: ${(props) => props.theme.textLight};
    line-height: 1.8em;
  }

  .youtube-video {
    width: 100%;

    iframe {
      width: 100%;
    }
  }

  .footer-link {
    color: ${(props) => props.theme.textLight};
  }
`;

const CustomSite = ({ subdomain }) => {
  const { website, youtube } = useCustomWebsite({ subdomain });
  const [theme, toggleTheme, themeStyles] = useContext(ThemeContext);

  const isYoutubeEnabled = website.data?.timelines.find(
    (item) => item.type === "youtube"
  ).enabled;

  return (
    <ThemeProvider
      theme={themeStyles}
      toggleTheme={toggleTheme}
      themeString={theme}
    >
      <GlobalStyles />

      <StyledWrapper>
        {website.isLoading && <Loader />}
        {website.data && (
          <>
            <header className="flex items-center p-4 justify-between">
              <h1 className="font-bold">{website.data.general.siteName}</h1>
              <SiteSocials socials={website.data.social} />
              <Link to="/submit" className="link">
                Submit a story
              </Link>
            </header>

            <main className="max-w-screen-2xl ml-auto mr-auto mt-10">
              <div className="hero  rounded-lg ">
                <img
                  src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </div>

              <section className="bio max-w-screen-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold header">About me</h2>
                <p className="whitespace-pre-wrap description mt-6">
                  {website.data.general.description}
                </p>
              </section>

              {isYoutubeEnabled && (
                <section className="youtube-videos mt-10">
                  <h2 className="text-2xl font-bold header">
                    Latest YouTube videos
                  </h2>

                  {youtube.isLoading && <Loader />}

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {youtube.data?.data &&
                      youtube.data.data.items.map((item, id) => (
                        <YouTube
                          key={id}
                          videoId={item.id.videoId}
                          containerClassName="youtube-video"
                        />
                      ))}
                  </div>
                </section>
              )}
            </main>
            <footer className="mt-10 p-4 flex justify-center">
              <p className="footer-link">
                Powered by{" "}
                <a
                  href="https://reddex.app"
                  rel="noopener noreferrer"
                  className="underline "
                >
                  Reddex
                </a>
              </p>
            </footer>
          </>
        )}
      </StyledWrapper>
    </ThemeProvider>
  );
};

export default CustomSite;
