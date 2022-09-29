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
};

export default mutations;
