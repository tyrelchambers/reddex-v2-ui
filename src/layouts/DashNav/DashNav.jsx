import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Collapsable from "../../components/Collapsable/Collapsable";
import { nav } from "../../routes/dashboard.routes";

const StyledLink = styled(Link)`
  .header {
    color: ${(props) =>
      props.isActive ? props.theme.accentPrimary : props.theme.textLight};
  }
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
`;

const DashNav = () => {
  const { page, sub_page } = useParams();

  return (
    <nav className="mt-10">
      <ul className="flex flex-col gap-4">
        {nav.map((item, index) => (
          <li key={index}>
            {item.slug ? (
              <StyledLink to={`/dashboard${item.slug}`}>
                <div className="header py-2 px-4 gap-4 flex items-center font-bold">
                  <FontAwesomeIcon icon={item.icon} />
                  <p>{item.label}</p>
                </div>
              </StyledLink>
            ) : (
              <Collapsable
                isNav
                isActive={page === item.value}
                header={
                  <>
                    <FontAwesomeIcon icon={item.icon} className=" mr-4" />
                    <p className="font-bold">{item.label}</p>
                  </>
                }
              >
                {item.children.map((item) => {
                  const url = item.slug.split("/").slice(1, 3);
                  const isActive = url[0] === page && url[1] === sub_page;

                  return (
                    <StyledLink
                      to={`/dashboard${item.slug}`}
                      key={item.slug}
                      className="p-3 text-sm text-gray-700"
                      isActive={isActive}
                    >
                      {item.label}
                    </StyledLink>
                  );
                })}
              </Collapsable>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DashNav;
