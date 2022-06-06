import React, { useState } from "react";

import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";
import { faSend } from "@fortawesome/pro-duotone-svg-icons";
import { getRedditAccessToken } from "../../api/getRedditAccessToken";
import { sendMessageUrl } from "../../constants";

const ChatReply = ({ userToSendMessageTo, refetch }) => {
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const { access_token } = await getRedditAccessToken();

    const thing_id = userToSendMessageTo;

    const body = new FormData();
    body.set("thing_id", thing_id);
    body.set("text", message);
    body.set("return_rtjson", true);

    axios
      .post(sendMessageUrl, body, {
        headers: {
          Authorization: `bearer ${access_token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        setMessage("");
        refetch();
      });
  };

  return (
    <div className="sticky bottom-2 shadow-md bg-white rounded-lg overflow-hidden border-2 border-gray-100 flex gap-4 items-center">
      <TextareaAutosize
        placeholder="Send a reply"
        className="p-4 w-full"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        maxRows={4}
      />
      <Button className="mr-2" disabled={!message} onClick={submitHandler}>
        <FontAwesomeIcon icon={faSend} />
      </Button>
    </div>
  );
};

export default ChatReply;
