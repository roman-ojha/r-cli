import { createLogger, createStore } from "vuex";
import tabsStore from "./modules/tabs";
import docsStore from "./modules/docs";
import { Store } from "./types";

const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
  plugins,
  modules: {
    tabsStore,
    docsStore,
  },
});

export function useStore(): Store {
  return store as Store;
}
