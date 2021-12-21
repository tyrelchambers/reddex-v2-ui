import React, { useEffect } from "react";
import DashWrapper from "../../layouts/DashWrapper/DashWrapper";
import { useUser } from "../../hooks/useUser";
import { Outlet, useMatch, useNavigate } from "react-location";
import { toast } from "react-toastify";

const Index = () => {
  const { query } = useUser();
  const { data } = useMatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (query.isSuccess && !query.data) {
      toast.warn("You need to be logged in to view this page");
      navigate({ to: "/login" });
    }
  }, [data, query]);

  return (
    <DashWrapper>
      <Outlet />
    </DashWrapper>
  );
};

export default Index;
