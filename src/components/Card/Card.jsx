import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowAltCircleUp,
  faBookCircleArrowRight,
  faBooksMedical,
  faCalendarClock,
  faClock,
  faFolder,
  faHashtag,
  faPlusCircle,
  faTags,
  faThumbsUp,
  faUserCircle,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import React from "react";
import styled from "styled-components";
import { averageReadingTime } from "../../utils/averageReadingTime";

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.backgroundSecondary};

  .card-author {
    width: 90%;
  }

  .card-main {
    height: calc(100% - 190px);
  }

  p {
    color: ${(props) => props.theme.textLight};
  }

  .card {
    &-floating-header {
      background-color: ${(props) => props.theme.backgroundMain};
    }
    &-floating-footer {
      background-color: ${(props) => props.theme.backgroundMain};
    }
  }
`;

const Card = ({ data, isReadingItem, isCompletedItem, isSubmitted, user }) => {
  return (
    <StyledCard className="w-full rounded-lg  overflow-hidden shadow-md justify-between">
      <header className="relative">
        <div className="h-14 bg-accent-primary"></div>

        <div className="card-floating-header absolute top-7 p-4 bg-white flex left-3 right-3 rounded-lg shadow-lg gap-8">
          {!isSubmitted && (
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faArrowAltCircleUp}
                className="text-accent-primary mr-2"
              />
              <p className="font-bold text-gray-800">{data.ups}</p>
            </div>
          )}
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="text-accent-primary mr-2"
            />
            <p className="text-gray-600 truncate card-author">{data.author}</p>
          </div>
        </div>
      </header>

      <main className="mt-8 p-4 card-main">
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          <p className="leading-7 text-gray-600 mt-2">{data.title}</p>
        </a>
      </main>

      <hr />

      <footer className="p-2">
        {!isSubmitted && (
          <section className="flex items-center gap-4 ml-2 mr-2">
            {data.link_flair_text && (
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faHashtag}
                  className="text-accent-primary"
                />{" "}
                <p className="text-gray-600 text-sm">{data.link_flair_text}</p>
              </div>
            )}

            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faFolder}
                className="text-accent-primary"
              />{" "}
              <p className="text-gray-600 text-sm">{data.subreddit}</p>
            </div>

            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCalendarClock}
                className="text-accent-primary"
              />{" "}
              <p className="text-gray-600 text-sm">
                {formatDistanceToNow(new Date(data.created * 1000), "yyyyMMdd")}
              </p>
            </div>
          </section>
        )}

        <section className="flex items-center  mt-4 card-floating-footer p-3 rounded-md justify-between">
          <div className="flex gap-6">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faClock}
                className="mr-2 text-accent-primary"
              />
              <p className="text-sm text-gray-600">
                {averageReadingTime(data.self_text, user.Profile.reading_time)}
                min
              </p>
            </div>
            {!isSubmitted && (
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="mr-2 text-accent-primary"
                />
                <p className="text-sm text-gray-600">
                  {(data.upvote_ratio * 100).toFixed(2)}%
                </p>
              </div>
            )}
          </div>

          {!isReadingItem && !isCompletedItem && !isSubmitted && (
            <FontAwesomeIcon
              icon={faPlusCircle}
              className="text-accent-primary "
            />
          )}

          {isReadingItem && (
            <div className="flex gap-4">
              <FontAwesomeIcon
                icon={faTags}
                className="text-accent-primary"
                title="Add tags"
              />
              <FontAwesomeIcon
                title="Add to completed list"
                icon={faBooksMedical}
                className="text-accent-primary"
              />
            </div>
          )}

          {isCompletedItem && (
            <div className="flex gap-4">
              <FontAwesomeIcon
                icon={faBookCircleArrowRight}
                title="Add back to reading list"
                className="text-accent-primary"
              />
              <FontAwesomeIcon
                icon={faTrashCan}
                title="Remove from completed list"
                className="text-accent-primary"
              />
            </div>
          )}

          {isSubmitted && (
            <div className="flex gap-4">
              <FontAwesomeIcon
                icon={faTrashCan}
                title="Remove from completed list"
                className="text-accent-primary"
              />
            </div>
          )}
        </section>
      </footer>
    </StyledCard>
  );
};

export default Card;
