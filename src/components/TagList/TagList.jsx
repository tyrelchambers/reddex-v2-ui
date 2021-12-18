import {
  faPenToSquare,
  faTag,
  faTrashCan,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-location";
import { useTag } from "../../hooks/useTag";
import { useTags } from "../../hooks/useTags";
import Loader from "../Loader/Loader";

const TagList = () => {
  const { tagsQuery } = useTags();
  const { deleteTagMutation } = useTag();

  const deleteHandler = (tagId) => {
    deleteTagMutation.mutate(tagId);
  };

  return (
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
                <div className="flex justify-between gap-6 p-3 w-full">
                  <p className="text-light ">
                    <span className="font-bold">{tag.stories.length}</span>{" "}
                    stories
                  </p>
                  <div className="flex items-center gap-4">
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
              </div>
            ))}
        </main>
      )}
    </>
  );
};

export default TagList;
