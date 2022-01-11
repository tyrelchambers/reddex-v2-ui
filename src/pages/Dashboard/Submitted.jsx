import React from "react";
import { H1 } from "../../components/headings/h1";
import Input from "../../components/Input/Input";
import { faSearch } from "@fortawesome/pro-duotone-svg-icons";
import { useSubmitted } from "../../hooks/useSubmitted";
import { useUser } from "../../hooks/useUser";
import SubmittedStory from "../../components/SubmittedStory/SubmittedStory";
import { useState } from "react";

const Submitted = () => {
  const { submittedQuery } = useSubmitted();
  const [search, setSearch] = useState("");
  const {
    query: { data: user },
  } = useUser();

  return (
    <>
      <header className="flex flex-col-reverse sm:flex-col gap-6">
        <div className="flex gap-4 max-w-xl w-full">
          <Input
            placeholder="Search by keywords..."
            icon={faSearch}
            value={search}
            onInput={(e) => setSearch(e.target.value)}
          />
        </div>
        <H1>Submitted</H1>
      </header>

      <section className="mt-10">
        {submittedQuery.data && submittedQuery.data.length === 0 && (
          <p className="mt-4 text-light">Nothing to show</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
          {submittedQuery.data &&
            submittedQuery.data
              .filter((el) =>
                search
                  ? el.story_title.toLowerCase().includes(search.toLowerCase())
                  : el
              )
              .map((item, index) => (
                <SubmittedStory user={user} item={item} key={index} />
              ))}
        </div>
      </section>
    </>
  );
};

export default Submitted;
