import { useMutation, useQuery } from "react-query";
import { addToApprovedList } from "../api/addToApprovedList";
import { getApprovedList } from "../api/getApprovedList";

export const useReadingList = () => {
  const approvedList = useQuery("approvedList", getApprovedList);
  const saveToApproved = useMutation((data) => addToApprovedList(data));

  return { approvedList, saveToApproved };
};
