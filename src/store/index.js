import { action, createStore } from "easy-peasy";

const store = createStore({
  reports: [],
  createReport: action((state, payload) => {
    state.reports.push(payload);
  }),
});

export default store;
