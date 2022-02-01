import { makeAutoObservable } from "mobx";

class AnnouncementStore {
  unreadAnnouncements = [];
  announcements = [];

  constructor() {
    makeAutoObservable(this);
  }

  getUnreadAnnouncements() {
    return this.unreadAnnouncements;
  }

  getUnreadCount() {
    return this.unreadAnnouncements.length;
  }
}

export default new AnnouncementStore();
