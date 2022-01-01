import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React from "react";
import Avatar from "../Avatar/Avatar";

const Chat = ({ message, user, isFirstMessage }) => {
  return (
    <div className="chat flex">
      <div className="chat-avatar mr-4">
        {message.author === user.Profile.reddit_profile.name ? (
          <Avatar
            size="medium"
            url={user.Profile.reddit_profile.snoovatar_img}
            className="mr-4 block"
            hasBorder
          />
        ) : (
          <Avatar size="medium" className="mr-4 block" hasBorder />
        )}
      </div>
      <div className="flex flex-col w-full">
        <header className="flex items-center justify-between">
          <p className="text font-bold text-lg">
            {!isFirstMessage && (
              <FontAwesomeIcon
                icon={faReply}
                className="text-accent-primary mr-4"
              />
            )}

            {message.author === user.Profile.reddit_profile.name
              ? `You (${user.Profile.reddit_profile.name})`
              : message.author}
          </p>
          <p className="text-light ">
            {format(new Date(message.created) * 1000, "MMM do, yyy")}
          </p>
        </header>
        <p className="text-light mt-4 whitespace-pre-wrap">{message.body}</p>
      </div>
    </div>
  );
};

export default Chat;
