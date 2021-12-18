import { faArrowUpLeftFromCircle } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useRouter } from "react-location";
import styled from "styled-components";
import Collapsable from "../../components/Collapsable/Collapsable";
import { nav } from "../../routes/dashboard.routes";

const StyledLink = styled(Link)`
  .header {
    color: ${(props) =>
      props.isActive ? props.theme.accentPrimary : props.theme.text};
  }
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  color: ${(props) =>
    props.isActive ? props.theme.accentPrimary : "var(--black)"};
`;

const StyledHeader = styled(Link)`
  color: ${(props) =>
    props.isActive ? props.theme.accentPrimary : props.theme.text};
`;

const DashNav = () => {
  // const { page, sub_page } = useParams();
  const router = useRouter();
  const activeRoute = router.state.location.pathname;

  return (
    <nav className="mt-10">
      <ul className="flex flex-col gap-4">
        {nav.map((item, index) => (
          <li key={index}>
            {item.slug ? (
              <StyledHeader
                to={`/dashboard${item.slug}`}
                isActive={activeRoute.includes(item.slug.replace("/", ""))}
              >
                <div className="header py-2 px-4 gap-4 flex items-center font-bold">
                  <FontAwesomeIcon icon={item.icon} />
                  <p>{item.label}</p>
                </div>
              </StyledHeader>
            ) : (
              <Collapsable
                isNav
                isActive={activeRoute.includes(item.value)}
                header={
                  <>
                    <FontAwesomeIcon icon={item.icon} className=" mr-4" />
                    <p className="font-bold">{item.label}</p>
                  </>
                }
              >
                {item.children.map((item) => {
                  return (
                    <StyledLink
                      to={`/dashboard${item.slug}`}
                      key={item.slug}
                      className="p-3 text-sm "
                      isActive={activeRoute.includes(item.slug)}
                    >
                      {item.label}
                    </StyledLink>
                  );
                })}
              </Collapsable>
            )}
          </li>
        ))}
        <li>
          <StyledLink to={`/`}>
            <div className="header py-2 px-4 gap-4 flex items-center font-bold">
              <FontAwesomeIcon icon={faArrowUpLeftFromCircle} />
              <p>Get Posts</p>
            </div>
          </StyledLink>
        </li>
      </ul>
    </nav>
  );
};

export default DashNav;
