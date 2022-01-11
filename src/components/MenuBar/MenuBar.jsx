import {
  faBold,
  faItalic,
  faList,
  faListOl,
  faParagraph,
  faRotateLeft,
  faStrikethrough,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBlockQuote,
  faH1,
  faH2,
  faH3,
  faH4,
  faH5,
  faH6,
  faHorizontalRule,
  faRotateRight,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  button {
    background-color: ${(props) => props.theme.backgroundSecondary};
    height: 40px;
    width: 40px;
    border-radius: 5px;
    transition: all 0.2s ease;
    color: ${(props) => props.theme.textLight};
    &:hover {
      background-color: ${(props) => props.theme.accentPrimary};
      color: white;
    }
  }

  .is-active {
    background-color: ${(props) => props.theme.accentPrimary};
    color: white;
  }
`;

const MenuBar = ({ editor }) => {
  if (!editor) return null;

  return (
    <StyledWrapper className="w-full flex items-center justify-betwee flex-wrap gap-2">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faBold} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faItalic} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faStrikethrough} />
      </button>

      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faParagraph} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faH1} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faH2} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faH3} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faH4} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faH5} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faH6} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faList} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faListOl} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faBlockQuote} />
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <FontAwesomeIcon icon={faHorizontalRule} />
      </button>

      <button onClick={() => editor.chain().focus().undo().run()}>
        <FontAwesomeIcon icon={faRotateLeft} />
      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
        <FontAwesomeIcon icon={faRotateRight} />
      </button>
    </StyledWrapper>
  );
};

export default MenuBar;
