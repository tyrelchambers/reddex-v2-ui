import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { deleteContact } from "../api/deleteContact";
import { editContact } from "../api/editContact";
import { getContacts } from "../api/getContacts";
import { saveContact } from "../api/saveContact";

export const useContacts = () => {
  const queryClient = useQueryClient();

  const contactQuery = useQuery("contacts", getContacts);

  const contactMutation = useMutation((data) => saveContact(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("contacts");
      toast.success("Contact saved successfully");
    },
  });

  const contactDelete = useMutation((uuid) => deleteContact(uuid), {
    onSuccess: () => {
      queryClient.invalidateQueries("contacts");
      toast.success("Contact deleted successfully");
    },
  });

  const contactEdit = useMutation((uuid) => editContact(uuid), {
    onSuccess: () => {
      queryClient.invalidateQueries("contacts");
      toast.success("Contact edited successfully");
    },
  });

  return {
    contactQuery,
    contactMutation,
    contactDelete,
    contactEdit,
  };
};
