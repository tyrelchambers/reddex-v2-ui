import {
  faArrowAltCircleUp,
  faClock,
  faHashtag,
  faPlusCircle,
  faThumbsUp,
  faUserCircle,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: var(--off-white);

  .card-main {
    height: calc(100% - 190px);
  }
`;

const Card = ({ data }) => {
  return (
    <StyledCard className="w-full rounded-lg  overflow-hidden shadow-md justify-between">
      <header className="relative">
        <div className="h-14 bg-accent-primary"></div>

        <div className="absolute top-7 p-4 bg-white flex left-3 right-3 rounded-lg shadow-lg gap-8">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faArrowAltCircleUp}
              className="text-accent-primary mr-2"
            />
            <p className="font-bold text-gray-800">{data.upvotes}</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="text-accent-primary mr-2"
            />
            <p className="text-gray-600 truncate w-2/3">{data.author}</p>
          </div>
        </div>
      </header>

      <main className="mt-8 p-4 card-main">
        <p className="leading-7 text-gray-600 mt-2">{data.title}</p>
      </main>

      <hr />

      <footer className="p-2">
        <section className="flex items-center gap-2 ml-2 mr-2">
          <FontAwesomeIcon icon={faHashtag} className="text-accent-primary" />{" "}
          <p className="text-gray-600 text-sm">{data.flair}</p>
        </section>

        <section className="flex items-center  mt-4 bg-white p-3 rounded-md justify-between">
          <div className="flex gap-6">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faClock}
                className="mr-2 text-accent-primary"
              />
              <p className="text-sm text-gray-600">{data.readingTime}</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="mr-2 text-accent-primary"
              />
              <p className="text-sm text-gray-600">{data.upvoteRatio}%</p>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faPlusCircle}
            className="text-accent-primary text-lg"
          />
        </section>
      </footer>
    </StyledCard>
  );
};

export default Card;
