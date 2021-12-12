import { faCircleCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowAltCircleUp,
  faBookCircleArrowRight,
  faBooksMedical,
  faClock,
  faPlusCircle,
  faTags,
  faThumbsUp,
  faUserCircle,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react";
import React, { useState } from "react";
import styled from "styled-components";
import AddTagToStoryForm from "../../forms/AddTagToStoryForm";
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

const Card = observer(
  ({
    data,
    isReadingItem,
    isCompletedItem,
    isSubmitted,
    QueueStore = null,
    user,
    transferToCompleted,
    transferToApproved,
    deleteStoryMutation,
  }) => {
    const isInQueue = QueueStore && QueueStore.isInQueue(data.post_id);
    const [addTag, setAddTag] = useState(false);

    const addIcon = isInQueue ? (
      <FontAwesomeIcon
        icon={faCircleCheck}
        className="text-green-500 "
        onClick={() => QueueStore.removeFromQueue(data)}
      />
    ) : (
      <FontAwesomeIcon
        icon={faPlusCircle}
        className="text-accent-primary "
        onClick={() => QueueStore.addToQueue(data)}
      />
    );

    const close = () => {
      setAddTag(false);
    };

    return (
      <StyledCard
        className="w-full rounded-lg  overflow-hidden shadow-md justify-between"
        isInQueue
      >
        {addTag && <AddTagToStoryForm close={close} postId={data.uuid} />}
        {!addTag && (
          <>
            <header className="relative">
              <div
                className={`h-14 ${
                  isInQueue ? "bg-green-500" : "bg-accent-primary"
                }`}
              ></div>

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
                  <p className="text-gray-600 truncate card-author">
                    {data.author}
                  </p>
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

            <footer className="p-2 mt-2">
              <section className="flex items-center  mt-4 card-floating-footer p-3 rounded-md justify-between">
                <div className="flex gap-6">
                  {data.self_text && (
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="mr-2 text-accent-primary"
                      />
                      <p className="text-sm text-gray-600">
                        ~
                        {averageReadingTime(
                          data.self_text,
                          user.Profile.words_per_minute
                        )}{" "}
                        min
                      </p>
                    </div>
                  )}
                  {/* is not submitted through the form on custom webpage */}

                  {data.upvote_ratio && (
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

                {/* show add-to-queue button */}

                {!isReadingItem && !isCompletedItem && !isSubmitted && addIcon}

                {/* is an item found on approved reading list */}

                {isReadingItem && (
                  <div className="flex gap-4">
                    <FontAwesomeIcon
                      icon={faTags}
                      className="text-accent-primary"
                      title="Add tags"
                      onClick={() => setAddTag(true)}
                    />

                    <FontAwesomeIcon
                      title="Add to completed list"
                      icon={faBooksMedical}
                      className="text-accent-primary"
                      onClick={() => transferToCompleted.mutate(data.uuid)}
                    />
                  </div>
                )}

                {/* is an item found on completed reading list */}

                {isCompletedItem && (
                  <div className="flex gap-4">
                    <FontAwesomeIcon
                      icon={faBookCircleArrowRight}
                      title="Add back to reading list"
                      className="text-accent-primary"
                      onClick={() => transferToApproved.mutate(data.uuid)}
                    />
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      title="Remove from completed list"
                      className="text-accent-primary"
                      onClick={() => deleteStoryMutation.mutate(data.uuid)}
                    />
                  </div>
                )}

                {/* is submitted through webpage */}
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
          </>
        )}
      </StyledCard>
    );
  }
);

export default Card;
