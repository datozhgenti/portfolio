import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({ userName: "", starterViewOn: true }),
});
