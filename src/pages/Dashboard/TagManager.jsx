import {
  faCirclePlus,
  faPenToSquare,
  faTag,
  faTrashCan,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { H1 } from "../../components/headings/h1";
import Subtitle from "../../components/Subtitle/Subtitle";
import NewTagForm from "../../forms/NewTagForm";
import { StyledLink } from "../../globalStyles";
import { useTags } from "../../hooks/useTags";
import Loader from "../../components/Loader/Loader";
import { useTag } from "../../hooks/useTag";
import { Link } from "react-router-dom";
import EditTagForm from "../../forms/EditTagForm";

const StyledWrapper = styled.section`
  .tag {
    background-color: ${(props) => props.theme.backgroundSecondary};
    p {
      color: white;
    }
  }
  .edit-action {
    color: ${(props) => props.theme.green};
  }
`;

const TagManager = () => {
  const { sub_page } = useParams();
  const { tagsQuery } = useTags();
  const { deleteTagMutation } = useTag();

  const deleteHandler = (tagId) => {
    deleteTagMutation.mutate(tagId);
  };

  return (
    <StyledWrapper>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <H1 className="mb-2">Tag Manager</H1>
          <Subtitle>
            Manage all the tags you've created. You can create and delete tags
            here.
          </Subtitle>
        </div>

        <StyledLink to="/dashboard/tags/new">
          <FontAwesomeIcon icon={faCirclePlus} className="mr-2" /> Create a tag
        </StyledLink>
      </div>

      {sub_page === "new" && (
        <section className="max-w-lg mt-10">
          <NewTagForm />
        </section>
      )}

      {sub_page === "edit" && (
        <section className="max-w-lg mt-10">
          <EditTagForm />
        </section>
      )}

      {!sub_page && (
        <>
          {tagsQuery.isLoading && <Loader />}
          {tagsQuery.data && (
            <main className="grid grid-cols-4 gap-6 mt-10">
              {tagsQuery.data &&
                tagsQuery.data.map((tag) => (
                  <div
                    className="tag flex items-center flex-col rounded-lg overflow-hidden shadow-md"
                    key={tag.uuid}
                  >
                    <div className="flex bg-accent-primary px-4 py-2 w-full">
                      <p className="mr-4">
                        <FontAwesomeIcon icon={faTag} className="mr-2" />
                        {tag.tag}
                      </p>
                    </div>
                    <div className="flex items-center gap-6 p-3">
                      <Link to={`/dashboard/tags/edit/${tag.uuid}`}>
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          className="edit-action"
                        />
                      </Link>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="text-accent-primary"
                        onClick={() => deleteHandler(tag.uuid)}
                      />
                    </div>
                  </div>
                ))}
            </main>
          )}
        </>
      )}
    </StyledWrapper>
  );
};

export default TagManager;
