import { makeAutoObservable } from "mobx";

class ModalStore {
  isOpen = false;
  modalContent = null;

  constructor() {
    makeAutoObservable(this);
  }

  openModal = () => {
    this.isOpen = true;
  };
  closeModal = () => {
    this.isOpen = false;
  };

  setModalContent = (elem) => {
    this.modalContent = elem;
  };
}

export default new ModalStore();
