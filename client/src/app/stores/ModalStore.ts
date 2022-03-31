import {makeAutoObservable, runInAction} from "mobx"

export const MODAL_TYPES = {
  CONFIRM_DELETE_ACTIVITY: "CONFIRM_DELETE_ACTIVITY",
}

export default class ModalStore {
  openModalsIds: string[] = []
  constructor() {
    makeAutoObservable(this)
  }

  isModalOpen = (id: string): boolean | undefined => {
    if (!this.openModalsIds) return undefined
    return this.openModalsIds.includes(id) ? true : false
  }

  toggleModal = (id: string) => {
    if (this.openModalsIds.includes(id)) {
      runInAction(() => {
        this.openModalsIds = this.openModalsIds.filter(m => m !== id)
      })
    } else {
      runInAction(() => {
        this.openModalsIds.push(id)
      })
    }
  }
}
