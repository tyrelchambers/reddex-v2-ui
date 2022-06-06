import Avatar from "../Avatar/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";

const Chat = ({ message, user, isFirstMessage }) => {
  return (
    <div className="chat flex flex-col sm:flex-row">
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
      <div className="flex flex-col w-full gap-2">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-4 sm:mt-0">
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
          <p className="text-light italic">
            {format(new Date(message.created) * 1000, "MMM do, yyy")}
          </p>
        </header>
        <p className="text-light whitespace-pre-wrap break-words">
          {message.body}
        </p>
      </div>
    </div>
  );
};

export default Chat;
