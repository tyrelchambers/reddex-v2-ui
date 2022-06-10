import React, { useState } from "react";

import { Button } from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import Grid from "../../../layouts/Grid/Grid";
import { H1 } from "../../../components/headings/h1";
import Loader from "../../../components/Loader/Loader";
import { useReadingList } from "../../../hooks/useReadingList";
import { useStory } from "../../../hooks/useStory";

const Completed = ({ user }) => {
  const { completedList, transferToApproved } = useReadingList();
  const [removingStories, setRemovingStories] = useState(false);
  const { deleteStoryMutation } = useStory();

  const removeAllCompletedStories = () => {
    setRemovingStories(true);
    for (let index = 0; index < completedList.data.length; index++) {
      const element = completedList.data[index];
      deleteStoryMutation.mutate(element.uuid);
    }
    setRemovingStories(false);
  };

  return (
    <section className="w-full">
      <div className="flex justify-between">
        <H1>Completed</H1>
        <Button
          variant="secondary"
          onClick={removeAllCompletedStories}
          disabled={removingStories}
        >
          {removingStories ? "Removing..." : "Remove all"}
        </Button>
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
