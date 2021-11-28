import React from "react";
import styled from "styled-components";

const StyledAvatar = styled.img`
  border: 3px solid
    ${(props) =>
      props.hasBorder
        ? props.theme.backgroundSecondary
        : props.theme.backgroundMain};
  width: ${(props) => {
    if (props.size === "small") {
      return "30px";
    }
    if (props.size === "medium") {
      return "50px";
    }
    if (props.size === "large") {
      return "100px";
    }
  }};
  height: ${(props) => {
    if (props.size === "small") {
      return "30px";
    }
    if (props.size === "medium") {
      return "50px";
    }
    if (props.size === "large") {
      return "100px";
    }
  }};
`;

const Avatar = ({ url, size, className, hasBorder }) => {
  if (url) {
    return (
      <StyledAvatar
        src={url}
        alt="avatar"
        size={size}
        className={`avatar rounded-full object-cover ${
          className ? className : ""
        }`}
        hasBorder={hasBorder}
      />
    );
  }

  return (
    <StyledAvatar
      src={`https://www.gravatar.com/avatar/${Math.random()}?d=identicon`}
      alt="avatar"
      size={size}
      className={`avatar rounded-full object-cover ${
        className ? className : ""
      }`}
      hasBorder={hasBorder}
    />
  );
};

export default Avatar;
