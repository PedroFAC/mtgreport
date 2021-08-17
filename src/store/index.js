import { action, createStore } from "easy-peasy";

const store = createStore({
  reports: [],
  createReport: action((state, payload) => {
    state.reports.push(payload);
  }),
  formats: [
    "Brawl",
    "Commander",
    "Duel Commander",
    "Future",
    "Gladiator",
    "Historic",
    "Legacy",
    "Modern",
    "Oldschool",
    "Pauper",
    "Penny",
    "Pioneer",
    "Premodern",
    "Standard",
    "Vintage",
    "Leviathan",
    "Centurion",
    "Sealed",
    "Draft",
  ],
});

export default store;
