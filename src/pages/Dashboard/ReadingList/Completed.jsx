import React from "react";
import Card from "../../../components/Card/Card";
import { H1 } from "../../../components/headings/h1";
import Loader from "../../../components/Loader/Loader";
import { useReadingList } from "../../../hooks/useReadingList";
import { useStory } from "../../../hooks/useStory";
import Grid from "../../../layouts/Grid/Grid";

const Completed = ({ user }) => {
  const { completedList, transferToApproved } = useReadingList();
  const { deleteStoryMutation } = useStory();

  return (
    <section className="w-full">
      <div className="flex justify-between">
        <H1>Completed</H1>
      </div>

      {completedList.isLoading && <Loader size="2x" />}

      {!completedList.isLoading && (
        <Grid>
          {completedList.data.length > 0 &&
            completedList.data.map((item, index) => (
              <Card
                data={item}
                key={index}
                user={user}
                isCompletedItem
                transferToApproved={transferToApproved}
                deleteStoryMutation={deleteStoryMutation}
              />
            ))}
        </Grid>
      )}
    </section>
  );
};

export default Completed;
