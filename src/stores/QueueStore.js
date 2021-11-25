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
    return this.queue.filter(({ _id }) => _id === post).length > 0;
  }

  removeFromQueue(post) {
    const clone = [...this.queue];
    const newQueue = clone.filter(({ _id }) => _id !== post._id);
    this.queue = newQueue;
  }

  clearQueue() {
    this.queue = [];
  }
}

export default new QueueStore();
