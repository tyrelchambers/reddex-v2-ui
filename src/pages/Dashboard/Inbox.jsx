import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { getRedditAccessToken } from "../../api/getRedditAccessToken";
import { Button } from "../../components/Button/Button";
import { H1 } from "../../components/headings/h1";
import InboxItem from "../../components/InboxItem/InboxItem";
import Input from "../../components/Input/Input";
import Subtitle from "../../components/Subtitle/Subtitle";
import { useRedditInbox } from "../../hooks/useRedditInbox";
import { useTokens } from "../../hooks/useTokens";

const data = [
  {
    username: "tyrelchambers",
    message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!

I also upload these stories to a podcast just for those who might prefer to listen while they drive, or something, if that's ok with you too!

If you'd like, you can check out my channel; see if it works for you https://www.youtube.com/c/StoriesAfterMidnight

Thanks!
`,
    date: "Today",
    subject:
      "911 911 HELP pacific rock cannery in Skinner Oregon EMERGENCY!!!!",
    replies: [
      {
        username: "tyrelchambers",
        message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!`,
      },
      {
        username: "tyrelchambers",
        message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!`,
      },
    ],
  },
  {
    username: "tyrelchambers",
    message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!

I also upload these stories to a podcast just for those who might prefer to listen while they drive, or something, if that's ok with you too!

If you'd like, you can check out my channel; see if it works for you https://www.youtube.com/c/StoriesAfterMidnight

Thanks!
`,
    date: "Today",
    subject:
      "911 911 HELP pacific rock cannery in Skinner Oregon EMERGENCY!!!!",
    replies: [
      {
        username: "tyrelchambers",
        message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!`,
      },
      {
        username: "tyrelchambers",
        message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!`,
      },
    ],
  },
  {
    username: "tyrelchambers",
    message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!

I also upload these stories to a podcast just for those who might prefer to listen while they drive, or something, if that's ok with you too!

If you'd like, you can check out my channel; see if it works for you https://www.youtube.com/c/StoriesAfterMidnight

Thanks!
`,
    date: "Today",
    subject:
      "911 911 HELP pacific rock cannery in Skinner Oregon EMERGENCY!!!!",
    replies: [
      {
        username: "tyrelchambers",
        message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!`,
      },
      {
        username: "tyrelchambers",
        message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!`,
      },
    ],
  },
  {
    username: "tyrelchambers",
    message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!

I also upload these stories to a podcast just for those who might prefer to listen while they drive, or something, if that's ok with you too!

If you'd like, you can check out my channel; see if it works for you https://www.youtube.com/c/StoriesAfterMidnight

Thanks!
`,
    date: "Today",
    subject:
      "911 911 HELP pacific rock cannery in Skinner Oregon EMERGENCY!!!!",
    replies: [
      {
        username: "tyrelchambers",
        message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!`,
      },
      {
        username: "tyrelchambers",
        message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!`,
      },
    ],
  },
  {
    username: "tyrelchambers",
    message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!

I also upload these stories to a podcast just for those who might prefer to listen while they drive, or something, if that's ok with you too!

If you'd like, you can check out my channel; see if it works for you https://www.youtube.com/c/StoriesAfterMidnight

Thanks!
`,
    date: "Today",
    subject:
      "911 911 HELP pacific rock cannery in Skinner Oregon EMERGENCY!!!!",
    replies: [
      {
        username: "tyrelchambers",
        message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!`,
      },
      {
        username: "tyrelchambers",
        message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!`,
      },
    ],
  },
  {
    username: "tyrelchambers",
    message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!

I also upload these stories to a podcast just for those who might prefer to listen while they drive, or something, if that's ok with you too!

If you'd like, you can check out my channel; see if it works for you https://www.youtube.com/c/StoriesAfterMidnight

Thanks!
`,
    date: "Today",
    subject:
      "911 911 HELP pacific rock cannery in Skinner Oregon EMERGENCY!!!!",
    replies: [
      {
        username: "tyrelchambers",
        message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!`,
      },
      {
        username: "tyrelchambers",
        message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!`,
      },
    ],
  },
  {
    username: "tyrelchambers",
    message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!

I also upload these stories to a podcast just for those who might prefer to listen while they drive, or something, if that's ok with you too!

If you'd like, you can check out my channel; see if it works for you https://www.youtube.com/c/StoriesAfterMidnight

Thanks!
`,
    date: "Today",
    subject:
      "911 911 HELP pacific rock cannery in Skinner Oregon EMERGENCY!!!!",
    replies: [
      {
        username: "tyrelchambers",
        message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!`,
      },
      {
        username: "tyrelchambers",
        message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!`,
      },
    ],
  },
  {
    username: "tyrelchambers",
    message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!

I also upload these stories to a podcast just for those who might prefer to listen while they drive, or something, if that's ok with you too!

If you'd like, you can check out my channel; see if it works for you https://www.youtube.com/c/StoriesAfterMidnight

Thanks!
`,
    date: "Today",
    subject:
      "911 911 HELP pacific rock cannery in Skinner Oregon EMERGENCY!!!!",
    replies: [
      {
        username: "tyrelchambers",
        message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!`,
      },
      {
        username: "tyrelchambers",
        message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!`,
      },
    ],
  },
  {
    username: "tyrelchambers",
    message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!

I also upload these stories to a podcast just for those who might prefer to listen while they drive, or something, if that's ok with you too!

If you'd like, you can check out my channel; see if it works for you https://www.youtube.com/c/StoriesAfterMidnight

Thanks!
`,
    date: "Today",
    subject:
      "911 911 HELP pacific rock cannery in Skinner Oregon EMERGENCY!!!!",
    replies: [
      {
        username: "tyrelchambers",
        message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!`,
      },
      {
        username: "tyrelchambers",
        message: `Hey there! I'm Tyrel and i narrate stories on my YouTube channel Stories After Midnight, as a hobby of mine. I was wondering if I'd be able to read yours? Just send me any links you want with the video, should you allow me to read it!`,
      },
    ],
  },
];

const StyledWrapper = styled.div`
  max-height: calc(100vh - 40px);
  overflow: auto;
`;

const Inbox = () => {
  const { redditAccessToken } = useTokens();
  const { inboxQuery } = useRedditInbox({
    access_token: redditAccessToken.data.access_token,
  });

  return (
    <StyledWrapper>
      <div className="flex gap-4  w-full">
        <Input placeholder="Search by keywords..." icon={faSearch} />
        <Button>
          <FontAwesomeIcon className="mr-2" />
          Search
        </Button>
      </div>

      <main className="mt-10">
        <H1>Inbox</H1>
        <Subtitle>
          Your Reddit-connected inbox. Showing your latest messages.
        </Subtitle>

        <div className="mt-10 flex flex-col gap-8 ">
          {data.length > 0 &&
            data.map((message, item) => <InboxItem data={message} />)}
        </div>
      </main>
    </StyledWrapper>
  );
};

export default Inbox;
