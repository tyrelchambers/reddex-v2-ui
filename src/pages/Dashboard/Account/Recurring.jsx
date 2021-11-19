import React from "react";
import { H1 } from "../../../components/headings/h1";
import Subtitle from "../../../components/Subtitle/Subtitle";
import RecurringForm from "../../../forms/RecurringForm";

const Recurring = () => {
  return (
    <section className="max-w-xl">
      <H1>Recurring Message</H1>
      <Subtitle className="mt-2">
        This is used when you've already messaged an author. It's useful so
        users don't feel like they're just getting copy and pasted messages.
      </Subtitle>

      <main className="mt-10">
        <RecurringForm />
      </main>
    </section>
  );
};

export default Recurring;
