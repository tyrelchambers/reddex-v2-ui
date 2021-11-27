import { observer } from "mobx-react";
import React from "react";
import PostQueueItem from "../../components/PostQueueItem/PostQueueItem";
import { useUser } from "../../hooks/useUser";

const PostQueue = observer(({ ModalStore, QueueStore }) => {
  const posts = QueueStore.queue;
  const [activeItem, setActiveItem] = React.useState(0);
  const { query } = useUser();

  const next = () => {
    setActiveItem(activeItem + 1);
  };

  const previous = () => {
    setActiveItem(activeItem - 1);
  };

  const removeHandler = (post) => {
    QueueStore.removeFromQueue(post);
    if (QueueStore.queue.length === 0) {
      ModalStore.closeModal();
    }
  };
  return (
    <PostQueueItem
      post={posts[activeItem]}
      next={next}
      showNext={activeItem < posts.length - 1}
      previous={previous}
      showPrevious={activeItem > 0}
      ModalStore={ModalStore}
      user={query.data}
      removeHandler={removeHandler}
    />
  );
});

export default PostQueue;
