import React, { useContext } from "react";
import EnabledWarning from "../../../components/EnabledWarning/EnabledWarning";
import { WebsiteContext } from "../../../contexts/websiteContext";
import SiteBuilderColorForm from "../../../forms/SiteBuilderColorForm";

const Colour = () => {
  const [state, dispatch] = useContext(WebsiteContext);

  return <SiteBuilderColorForm state={state} dispatch={dispatch} />;
};

export default Colour;
