import React, { useContext } from "react";
import Wrapper from "../layouts/Wrapper/Wrapper";
import { H1 } from "../components/headings/h1";
import Subtitle from "../components/Subtitle/Subtitle";
import { H2 } from "../components/headings/h2";
import guyWithGlasses from "../assets/images/guy_with_glasses.svg";
import hero from "../assets/images/hero_illustration.svg";

import { trustedBy } from "../constants";
import styled from "styled-components";
import { ThemeContext } from "../contexts/themeContext";
import blob from "../assets/images/blob.svg";

const StyledWrapper = styled.section`
  .trusted-by {
    p {
      background-color: ${(props) => props.theme.backgroundSecondary};
    }

    h2 {
      color: ${(props) => props.theme.textLight};
    }
  }
  .img-with-bg {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 4em;

    .bg {
      width: 1000px !important;
      left: -100px;
      opacity: 0.1;
    }

    img {
      position: absolute;
    }
  }

  .block {
    height: fit-content;
  }
`;

const About = () => {
  const [theme, toggleTheme, themeStyles] = useContext(ThemeContext);

  return (
    <StyledWrapper theme={themeStyles}>
      <Wrapper>
        <main className="mt-20 max-w-screen-md ml-auto mr-auto">
          <H1 className="text-center">Let's get familiar!</H1>
          <Subtitle className="text-center mt-2">
            Reddex is a toolkit for Youtube narrators. The goal is simple:
            provide an application to help narrators be productive creators.
          </Subtitle>

          <div className="flex flex-col items-center mt-20 trusted-by">
            <H2>Trusted by:</H2>
            <div className="flex flex-wrap justify-center mt-4 gap-2">
              {trustedBy.map((person) => (
                <p className="font-bold p-2 px-4 rounded-full text-super-light">
                  {person}
                </p>
              ))}
            </div>
          </div>

          <div className="block mt-20">
            <div className="img-with-bg h-[500px]">
              <img src={blob} className="ml-auto mr-auto bg" />

              <img
                src={guyWithGlasses}
                className="max-w-sm ml-auto mr-auto img"
              />
            </div>
            <H2
              className="mt-10 text-center relative z-10"
              style={{ fontSize: "3rem", lineHeight: "1.3em" }}
            >
              Thousands of posts in the palm of your hand
            </H2>
          </div>

          <div className="block mt-40">
            <div className="img-with-bg h-[300px]">
              <img src={blob} className="ml-auto mr-auto bg top-[-130px]" />

              <img src={hero} className="max-w-sm ml-auto mr-auto img" />
            </div>
            <H2
              className="mt-10 text-center relative z-10"
              style={{ fontSize: "3rem", lineHeight: "1.3em" }}
            >
              Show off your stuff with your own website
            </H2>
          </div>
        </main>
      </Wrapper>
    </StyledWrapper>
  );
};

export default About;
