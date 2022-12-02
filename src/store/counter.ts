import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 4,
  }),
  getters: {
    count() {
      return this.counter;
    }
  },
  actions: {
    increaseBy(diff: number) {
      this.counter = this.counter + diff;
    },
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    }
  }
})
