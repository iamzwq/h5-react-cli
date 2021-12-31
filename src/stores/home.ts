import { makeAutoObservable } from "mobx";
import type { RootStore } from ".";

class HomeStore {
  rootStore: RootStore;
  count = 0;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }
}

export default HomeStore;
