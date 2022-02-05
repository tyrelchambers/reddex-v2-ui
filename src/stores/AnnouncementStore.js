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
    return this.unreadAnnouncements?.length;
  }

  setAnnouncements(announcements) {
    this.announcements = announcements;
  }

  setUnread(announcements) {
    this.unreadAnnouncements = announcements;
  }
}

export default new AnnouncementStore();
