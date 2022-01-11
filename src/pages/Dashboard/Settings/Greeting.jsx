import React from "react";
import { H1 } from "../../../components/headings/h1";
import Loader from "../../../components/Loader/Loader";
import Subtitle from "../../../components/Subtitle/Subtitle";
import GreetingForm from "../../../forms/GreetingForm";
import { useUser } from "../../../hooks/useUser";

const Greeting = () => {
  const {
    query: { data: user, isLoading },
  } = useUser();

  return (
    <section className="max-w-xl">
      <H1>Greeting Message</H1>
      <Subtitle className="mt-2">
        This message is used when you haven't messaged an author before. Think
        of it as an initial greeting. Say hello, introduce yourself, go from
        there.
      </Subtitle>

      {isLoading ? (
        <Loader size="2x" />
      ) : (
        <main className="mt-10">
          <GreetingForm user={user} />
        </main>
      )}
    </section>
  );
};

export default Greeting;
