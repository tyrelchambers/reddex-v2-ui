import React from "react";
import DashWrapper from "../../layouts/DashWrapper/DashWrapper";
import { H1 } from "../../components/headings/h1";
import Input from "../../components/Input/Input";
import { faSearch } from "@fortawesome/pro-duotone-svg-icons";
import Grid from "../../layouts/Grid/Grid";
import Card from "../../components/Card/Card";

const data = [
  {
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
  },
  {
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
  },
];

const Submitted = () => {
  return (
    <>
      <div className="flex gap-4 max-w-xl w-full">
        <Input placeholder="Search by keywords..." icon={faSearch} />
      </div>
      <section className="mt-10">
        <H1>Submitted</H1>

        <Grid>
          {data.length > 0 &&
            data.map((item, index) => (
              <Card data={item} key={index} isSubmitted />
            ))}
        </Grid>
      </section>
    </>
  );
};

export default Submitted;
