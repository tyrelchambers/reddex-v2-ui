import isEmpty from "./isEmpty";
import { format } from "date-fns";

export const getLastReplyDate = (message) => {
  let date;
  if (isEmpty(message.replies)) {
    date = format(message.created_utc * 1000, "MMM dd");
  } else {
    date = format(
      message.replies.data.children[message.replies.data.children.length - 1]
        .data.created_utc * 1000,
      "MMM dd"
    );
  }

  return date;
};
