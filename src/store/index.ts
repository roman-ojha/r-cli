import { createLogger, createStore } from "vuex";
import tabsStore from "./modules/tabs";
import { Store } from "./types";

const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
  plugins,
  modules: {
    tabsStore,
  },
});

export function useStore(): Store {
  return store as Store;
}
