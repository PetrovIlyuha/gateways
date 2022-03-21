import {makeAutoObservable} from "mobx"
export default class ModalStore {
  modalOpen: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  toggleModal = () => {
    this.modalOpen = !this.modalOpen
  }
}
