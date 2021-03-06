import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useCustomWebsite } from "../../hooks/useCustomWebsite";
import Loader from "../../components/Loader/Loader";
import { GlobalStyles } from "../../globalStyles";
import { ThemeContext } from "../../contexts/themeContext";
import YouTube from "react-youtube";
import { useEffect } from "react";
import CustomHeader from "../../layouts/CustomHeader/CustomHeader";

const StyledWrapper = styled.section`
  .link {
    color: ${(props) => props.theme.textLight};
  }

  .hero {
    object-fit: cover;
    overflow: hidden;

    img {
      aspect-ratio: 16/9;
      width: 100%;
      height: 500px;
    }

    @media screen and (max-width: 768px) {
      height: auto;
    }
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

    @media screen and (max-width: 768px) {
      width: 95%;
    }
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

  .site-name,
  .social-icon {
    color: ${(props) => props.theme.text};
  }
`;

const CustomSite = ({ subdomain }) => {
  const { website, youtube } = useCustomWebsite({ subdomain });
  const [theme, toggleTheme, themeStyles, setThemeHandler] =
    useContext(ThemeContext);

  const websiteData = website.data?.config;

  useEffect(() => {
    if (website.data) {
      setThemeHandler(websiteData.theme.mode);
    }
  }, [setThemeHandler, website.data, websiteData?.theme.mode]);

  if (!websiteData?.enabled) return null;

  const isYoutubeEnabled =
    websiteData &&
    websiteData.timelines.find((item) => item.type === "youtube").enabled;

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
            <CustomHeader website={website.data.config} />

            <main className="max-w-screen-2xl ml-auto mr-auto sm:mt-10">
              <div className="hero  rounded-lg ">
                <img
                  src={
                    website.data.config.general.banner ||
                    "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  }
                  alt=""
                  className="object-cover"
                />
              </div>

              {websiteData.general.description && (
                <section className="bio max-w-screen-sm p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold header">About me</h2>
                  <p className="whitespace-pre-wrap description mt-6">
                    {websiteData.general.description}
                  </p>
                </section>
              )}

              {isYoutubeEnabled && (
                <section className="youtube-videos mt-10 p-2">
                  <h2 className="text-2xl font-bold header">
                    Latest YouTube videos
                  </h2>

                  {youtube.isLoading && <Loader size="2x" />}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
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
