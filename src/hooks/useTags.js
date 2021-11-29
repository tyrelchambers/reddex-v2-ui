import { useQuery } from "react-query";
import { getTags } from "../api/getTags";

export const useTags = () => {
  const tagsQuery = useQuery("tags", getTags);

  return {
    tagsQuery,
  };
};
