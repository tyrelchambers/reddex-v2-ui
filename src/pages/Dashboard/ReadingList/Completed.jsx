import React from "react";
import Card from "../../../components/Card/Card";
import { H1 } from "../../../components/headings/h1";
import Grid from "../../../layouts/Grid/Grid";

const data = [];

const Completed = () => {
  return (
    <section>
      <div className="flex justify-between">
        <H1>Completed</H1>
      </div>

      <Grid>
        {data.length > 0 &&
          data.map((item, index) => (
            <Card data={item} key={index} isCompletedItem />
          ))}
      </Grid>
    </section>
  );
};

export default Completed;
