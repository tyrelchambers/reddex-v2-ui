import React from "react";
import { H1 } from "../../components/headings/h1";
import Input from "../../components/Input/Input";
import {
  faClock,
  faSearch,
  faTrashCan,
  faUserCircle,
} from "@fortawesome/pro-duotone-svg-icons";
import { useSubmitted } from "../../hooks/useSubmitted";
import styled from "styled-components";
import { averageReadingTimeWithText } from "../../utils/averageReadingTimeWithText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSubmittedStory } from "../../hooks/useSubmittedStory";
import { Link } from "react-location";

const StyledStory = styled.div`
  border: 1.5px solid ${(props) => props.theme.border};
`;

const Submitted = ({ user }) => {
  const { submittedQuery } = useSubmitted();
  const { deleteSubmitted } = useSubmittedStory();

  return (
    <>
      <div className="flex gap-4 max-w-xl w-full">
        <Input placeholder="Search by keywords..." icon={faSearch} />
      </div>
      <section className="mt-10">
        <H1>Submitted</H1>

        <div className="grid grid-cols-3 gap-3 mt-10">
          {submittedQuery.data &&
            submittedQuery.data.map((item, index) => (
              <StyledStory className="p-4 rounded-lg" key={index}>
                <p className="text-light flex items-center">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="text-accent-primary mr-2"
                  />
                  {item.author}
                </p>
                <Link
                  className="text-2xl font-bold text mt-4"
                  to={`/dashboard/story/${item.uuid}`}
                >
                  {item.story_title}
                </Link>

                <footer className="mt-4 flex justify-between">
                  <p className="text-light  text-sm">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="mr-2 text-accent-primary"
                    />
                    ~
                    {averageReadingTimeWithText(
                      item.body,
                      user.Profile.words_per_minute
                    )}{" "}
                    minutes
                  </p>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="text-accent-primary"
                    onClick={() => deleteSubmitted.mutate(item.uuid)}
                  />
                </footer>
              </StyledStory>
            ))}
        </div>
      </section>
    </>
  );
};

export default Submitted;
