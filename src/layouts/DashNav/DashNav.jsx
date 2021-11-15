import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Collapsable from "../../components/Collapsable/Collapsable";
import { useLocation } from "react-router-dom";
import { nav } from "../../routes/dashboard.routes";

const StyledLink = styled(Link)`
  color: ${(props) =>
    props.isActive ? props.theme.accentPrimary : props.theme.textLight};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
`;

const DashNav = () => {
  const location = useLocation();
  console.log(location);
  return (
    <nav className="mt-10">
      <ul className="flex flex-col gap-4">
        {nav.map((item, index) => (
          <li key={index}>
            {item.slug ? (
              <StyledLink
                to={`/dashboard${item.slug}`}
                className="py-2 px-4 gap-4 flex items-center font-bold"
              >
                <FontAwesomeIcon icon={item.icon} />
                <p>{item.label}</p>
              </StyledLink>
            ) : (
              <Collapsable
                isNav
                isActive={location.pathname.includes(item.value)}
                header={
                  <>
                    <FontAwesomeIcon icon={item.icon} className=" mr-4" />
                    <p className="font-bold">{item.label}</p>
                  </>
                }
              >
                {item.children.map((item) => {
                  const itemTab = item.slug.split("?")[1];
                  const isActive = location.search.includes(itemTab);
                  return (
                    <StyledLink
                      to={`/dashboard${item.slug}`}
                      key={item.slug}
                      className="p-3 text-sm"
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
