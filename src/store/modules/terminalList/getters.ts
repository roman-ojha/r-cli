import { GetterTree } from "vuex";
import { RootState } from "../../types";
import { TerminalListState, Getters } from "./types";

const getters: GetterTree<TerminalListState, RootState> & Getters = {
  isTerminalListVisible: (state: TerminalListState) => state.isVisible,
};

export default getters;
