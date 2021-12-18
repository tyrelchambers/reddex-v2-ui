import React from "react";
import { useNavigate } from "react-location";

const Navigate = ({ to }) => {
  const navigate = useNavigate();
  return navigate({ to });
};

export default Navigate;
