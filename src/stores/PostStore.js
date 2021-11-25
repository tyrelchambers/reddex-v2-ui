import { makeAutoObservable } from "mobx";

class PostStore {
  approved = [];
  completed = [];

  constructor() {
    makeAutoObservable(this);
  }

  transferToCompleted(post) {
    const index = this.approved.indexOf(post);
    if (index > -1) {
      this.approved.splice(index, 1);
      this.completed.push(post);
    }
  }

  transferToApproved(post) {
    const index = this.completed.indexOf(post);
    if (index > -1) {
      this.completed.splice(index, 1);
      this.approved.push(post);
    }
  }
}

export default new PostStore();
