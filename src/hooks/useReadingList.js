import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { addToApprovedList } from "../api/addToApprovedList";
import { addToCompleted } from "../api/addToCompleted";
import { getApprovedList } from "../api/getApprovedList";
import { getCompletedList } from "../api/getCompletedList";
import { transferStoryToApproved } from "../api/transferStoryToApproved";

export const useReadingList = () => {
  const queryClient = useQueryClient();

  const approvedList = useQuery("approvedList", getApprovedList);
  const completedList = useQuery("completedList", getCompletedList);

  const saveToApproved = useMutation((data) => addToApprovedList(data));

  const transferToCompleted = useMutation((data) => addToCompleted(data), {
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success("Story added to completed");
      queryClient.invalidateQueries("approvedList");
    },
  });
  const transferToApproved = useMutation(
    (data) => transferStoryToApproved(data),
    {
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: (data) => {
        toast.success("Story added to approved");
        queryClient.invalidateQueries("completedList");
      },
    }
  );

  return {
    approvedList,
    saveToApproved,
    transferToCompleted,
    completedList,
    transferToApproved,
  };
};
