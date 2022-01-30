import React, { useContext } from "react";
import Wrapper from "../layouts/Wrapper/Wrapper";
import { H1 } from "../components/headings/h1";
import { H2 } from "../components/headings/h2";
import guyWithGlasses from "../assets/images/guy_with_glasses.svg";
import hero from "../assets/images/hero_illustration.svg";
import { trustedBy, twitterTestimonies } from "../constants";
import styled from "styled-components";
import { ThemeContext } from "../contexts/themeContext";
import ContactIcon from "../assets/images/monitor_illustration_2.svg";
import monitor from "../assets/images/monitor_illustration.svg";
import readingList from "../assets/images/colorful_icon_2.svg";
import inboxFilter from "../assets/images/colorful_icon_7.svg";
import savedMessage from "../assets/images/ecommerce_icons_1.svg";
import tagIcon from "../assets/images/organization_icons_4.svg";
import contactList from "../assets/images/random_icons_6.svg";
import storySubmission from "../assets/images/seo_icons_6.svg";
import { Link } from "react-location";
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

    &:even {
      .bg {
        transform: rotateZ(180deg);
      }
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
        <main className="mt-20 max-w-screen-lg ml-auto mr-auto mb-20 p-4">
          <H1
            className="text-center"
            textSize="md:md:text-5xl text-3xl text-3xl"
          >
            Let's get familiar!
          </H1>
          <p className="text-center text-light text-2xl mt-6">
            Reddex is a toolkit for Youtube narrators. The goal is simple:
            provide an application to help narrators be productive creators.
          </p>

          <div className="flex flex-col items-center mt-20 trusted-by">
            <H2>Trusted by:</H2>
            <div className="justify-center mt-4 gap-2 grid grid-cols-2 md:grid-cols-3 w-full">
              {trustedBy.map((person) => (
                <p className="font-bold p-2 px-4 rounded-full text-super-light w-full text-center">
                  {person}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center mt-20 ">
            <H2 className="text-center ">What are people saying about us?</H2>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
              {twitterTestimonies.map((testimony) => (
                <img src={testimony} className="rounded-lg shadow-lg" />
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row  w-full md:mt-40 mt-20 gap-16 items-center ">
            <img src={guyWithGlasses} className="w-80" />

            <div className="flex flex-col">
              <H2
                className="text-center md:text-left"
                textSize="md:text-5xl text-3xl"
              >
                Get up to one thousand posts from any subreddit
              </H2>
              <p className="mt-4 text-light text-xl text-center md:text-left">
                The headline says it all
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row w-full mt-20 gap-10 items-center ">
            <div className="flex flex-col">
              <H2
                className="text-center md:text-left"
                textSize="md:text-5xl text-3xl"
              >
                Show off your work with your own website
              </H2>
              <p className="mt-4 text-light text-xl text-center md:text-left">
                You can use Reddex to show off your work with your own website!
              </p>
            </div>
            <img src={hero} className="w-80" />
          </div>

          <div className="flex flex-col md:flex-row w-full md:mt-40 mt-20 gap-10 items-center ">
            <img src={monitor} className="w-80" />

            <div className="flex flex-col">
              <H2
                className="text-center md:text-left"
                textSize="md:text-5xl text-3xl"
              >
                Message authors right from Reddex
              </H2>
              <p className="mt-4 text-light text-xl text-center md:text-left">
                Forget about about leaving Reddex and trying to fight your way
                to that author's profile. Queue up your messages and send your
                request with just one click!
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row w-full md:mt-40 mt-20 gap-10 items-center ">
            <div className="flex flex-col">
              <H2
                className="text-center md:text-left"
                textSize="md:text-5xl text-3xl"
              >
                Keep track of your backlog of stories
              </H2>
              <p className="mt-4 text-light text-xl text-center md:text-left">
                Keep track of the stories you've been given permission to read,
                and the stories you've completed, with a reading list!
              </p>
            </div>
            <img src={ContactIcon} className="w-80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:mt-40 mt-20 ">
            <div className="flex flex-col items-center">
              <img className="h-20" src={contactList} alt="contact list" />
              <h2 className="text-center text-light font-bold mt-6">
                Organize your contacts
              </h2>
              <p className="text-light text-center mt-2">
                Keep track of those you've contacted!
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img className="h-20" src={savedMessage} alt="saved messages" />
              <h2 className="text-center text-light font-bold mt-6">
                No more copy and pasting from notepad
              </h2>
              <p className="text-light text-center mt-2">
                Autofill your messages with one of two saved messages!
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img className="h-20" src={tagIcon} alt="tags" />
              <h2 className="text-center text-light font-bold mt-6">
                Organize with tags
              </h2>
              <p className="text-light text-center mt-2">
                Add tags to your stories for additional organization!
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="h-20"
                src={storySubmission}
                alt="story submissions"
              />
              <h2 className="text-center text-light font-bold mt-6">
                Accept custom written stories via your own website
              </h2>
              <p className="text-light text-center mt-2">
                It's super easy to get custom stories straight to your inbox and
                Reddex!
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img className="h-20" src={inboxFilter} alt="filter inbox" />
              <h2 className="text-center text-light font-bold mt-6">
                Filter your inbox
              </h2>
              <p className="text-light text-center mt-2">
                Search and filter your Reddit-connected inbox to easily find
                messages!
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img className="h-20" src={readingList} alt="reading list" />
              <h2 className="text-center text-light font-bold mt-6">
                Your own reading list
              </h2>
              <p className="text-light text-center mt-2">
                Easily keep track of the stories you're allowed to read!
              </p>
            </div>
          </div>

          <hr className="mt-20" />

          <div className="mt-20 flex flex-col items-center">
            <H2 className="text-center" textSize="md:text-5xl text-3xl">
              So, whadda ya say? Can we get started?
            </H2>
            <Link
              to="/pricing"
              className="bg-accent-primary p-3 mt-6 text-white rounded-lg shadow-md shadow-accent-primary"
            >
              Pick a plan
            </Link>
          </div>
        </main>
      </Wrapper>
    </StyledWrapper>
  );
};

export default About;
