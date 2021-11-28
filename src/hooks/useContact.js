import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { editContact } from "../api/editContact";
import { getContact } from "../api/getContact";

export const useContact = ({ uuid }) => {
  const queryClient = useQueryClient();

  const singleContactQuery = useQuery(
    ["contact", uuid],
    () => getContact(uuid),
    {
      enabled: !!uuid,
    }
  );

  const updateContact = useMutation((data) => editContact(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("contact");
      toast.success("Contact updated successfully");
    },
  });

  return {
    contact: singleContactQuery,
    updateContact,
  };
};
