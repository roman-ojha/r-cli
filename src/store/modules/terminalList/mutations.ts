import { MutationTree } from "vuex";
import {
  TerminalListState,
  Mutations,
  TerminalListMutationType,
} from "./types";

const mutations: MutationTree<TerminalListState> & Mutations = {
  [TerminalListMutationType.CHANGE_TERMINAL_VISIBILITY](
    state: TerminalListState,
    payload: TerminalListState["isVisible"]
  ) {
    state.isVisible = payload;
  },
  [TerminalListMutationType.TOGGLE_TERMINAL_VISIBILITY](
    state: TerminalListState
  ) {
    if (state.isVisible === "hidden") {
      state.isVisible = "visible";
    } else if (state.isVisible === "visible") {
      state.isVisible = "hidden";
    }
  },
};

export default mutations;
