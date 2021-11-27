import { observer } from "mobx-react";
import React from "react";
import PostQueueItem from "../../components/PostQueueItem/PostQueueItem";

const PostQueue = observer(({ ModalStore, QueueStore }) => {
  const posts = QueueStore.queue;
  const [activeItem, setActiveItem] = React.useState(0);

  const next = () => {
    setActiveItem(activeItem + 1);
  };

  const previous = () => {
    setActiveItem(activeItem - 1);
  };

  return (
    <PostQueueItem
      post={posts[activeItem]}
      next={next}
      showNext={activeItem < posts.length - 1}
      previous={previous}
      showPrevious={activeItem > 0}
      ModalStore={ModalStore}
    />
  );
});

export default PostQueue;