import {createContext, useContext} from "react"
import ActivityStore from "./ActivityStore"
import ModalStore from "./ModalStore"

interface Store {
  activityStore: ActivityStore
  modalStore: ModalStore
}

export const store: Store = {
  activityStore: new ActivityStore(),
  modalStore: new ModalStore(),
}

export const StoreContext = createContext(store)

export const useStore = () => {
  return useContext(StoreContext)
}
