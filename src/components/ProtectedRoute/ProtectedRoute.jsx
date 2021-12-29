import React from "react";
import { Navigate } from "react-location";
import { useUser } from "../../hooks/useUser";

const ProtectedRoute = (props) => {
  const {
    query: { data: user, isSuccess },
  } = useUser();

  return isSuccess && user ? props.children : <Navigate to="/login" />;
};

export default ProtectedRoute;
