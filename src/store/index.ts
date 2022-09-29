import { createLogger, createStore } from "vuex";
import tabsStore from "./modules/tabs";
import docsStore from "./modules/docs";
import terminalListStore from "./modules/terminalList";
import { Store } from "./types";

const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
  plugins,
  modules: {
    tabsStore,
    docsStore,
    terminalListStore,
  },
});

export function useStore(): Store {
  return store as Store;
}
