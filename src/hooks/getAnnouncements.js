import { useQuery } from "react-query";
import { getAnnouncements } from "../api/getAnnouncements";

export const useAnnouncements = () => {
  const announcements = useQuery("announcements", getAnnouncements);

  return announcements;
};
