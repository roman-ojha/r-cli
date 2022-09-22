import { createLogger, createStore } from "vuex";
import { Store } from "./types";

const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
  plugins,
  modules: {},
});

// export function useStore(): Store {
//     return store as Store;
// }
