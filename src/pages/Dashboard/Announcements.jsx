import React from "react";
import { H1 } from "../../components/headings/h1";
import { useAnnouncements } from "../../hooks/getAnnouncements";
import StoryblokClient from "storyblok-js-client";
import { H2 } from "../../components/headings/h2";
import { format } from "date-fns";
import styled from "styled-components";
import { observer } from "mobx-react";
import parse from "html-react-parser";

let Storyblok = new StoryblokClient({
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
});

const StyledWrapper = styled.section`
  .announcement {
    border-bottom: 1px solid ${(props) => props.theme.border};
    padding-bottom: 1em;
    padding-top: 1em;
  }

  .announcement-body {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: bold;
    }

    h1 {
      font-size: 1.5em;
    }

    h2 {
      font-size: 1.5em;
    }

    h3 {
      font-size: 1.2em;
    }

    a {
      color: ${(props) => props.theme.accentPrimary};
      text-decoration: underline;
    }

    p {
      margin: 1em 0;
    }
  }

  .date {
    color: ${(props) => props.theme.accentPrimary};
  }
`;

const Announcements = observer(({ AnnouncementStore }) => {
  const announcements = AnnouncementStore.announcements.data?.stories;
  window.localStorage.setItem(
    "announcements",
    announcements.map((story) => story.uuid)
  );

  return (
    <StyledWrapper>
      <H1>Announcements</H1>

      <ul className="mt-8 max-w-2xl">
        {announcements.map((story) => (
          <li className="announcement flex flex-col gap-4">
            <header className="flex flex-col gap-2 ">
              <p className="date">
                {format(new Date(story.first_published_at), "MMMM dd, yyyy")}
              </p>
              <H2>{story.name}</H2>
            </header>
            <section className="text-light leading-8 announcement-body">
              {parse(
                Storyblok.richTextResolver.render(story.content.long_text)
              )}
            </section>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
});

export default Announcements;
