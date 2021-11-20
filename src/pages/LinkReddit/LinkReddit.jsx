import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "../../components/Button/Button";
import { H1 } from "../../components/headings/h1";
import Wrapper from "../../layouts/Wrapper/Wrapper";

const LinkReddit = () => {
  return (
    <Wrapper>
      <main className="flex flex-col mt-20 items-center">
        <H1 className="text-5xl mb-10">Link your Reddit profile</H1>
        <Button>
          <FontAwesomeIcon icon={faLink} className="mr-2" /> Link account
        </Button>
      </main>
    </Wrapper>
  );
};

export default LinkReddit;
