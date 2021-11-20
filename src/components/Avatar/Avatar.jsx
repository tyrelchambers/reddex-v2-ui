import React from "react";
import styled from "styled-components";

const StyledAvatar = styled.img`
  border: 3px solid ${(props) => props.theme.backgroundMain};
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

const Avatar = ({ url, size, className }) => {
  return (
    <StyledAvatar
      src={url}
      alt="avatar"
      size={size}
      className={`avatar rounded-full ${className ? className : ""}`}
    />
  );
};

export default Avatar;
