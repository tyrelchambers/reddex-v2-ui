import { makeAutoObservable } from "mobx";

class QueueStore {
  queue = [];
  constructor() {
    makeAutoObservable(this);
  }

  addToQueue(post) {
    this.queue.push(post);
  }

  isInQueue(post) {
    return this.queue.filter(({ post_id }) => post_id === post).length > 0;
  }

  removeFromQueue(post) {
    const clone = [...this.queue];
    const newQueue = clone.filter(({ post_id }) => post_id !== post.post_id);
    this.queue = newQueue;
  }

  clearQueue() {
    this.queue = [];
  }
}

export default new QueueStore();
