import React from "react";
import EnabledWarning from "../../../components/EnabledWarning/EnabledWarning";
import SiteBuilderColorForm from "../../../forms/SiteBuilderColorForm";

const Colour = (props) => {
  if (!props.state.enabled) {
    return <EnabledWarning />;
  }
  return <SiteBuilderColorForm {...props} />;
};

export default Colour;
