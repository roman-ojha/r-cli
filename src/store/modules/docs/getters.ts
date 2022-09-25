import { GetterTree } from "vuex";
import { RootState } from "../../types";
import { DocsState, Getters } from "./types";

const getters: GetterTree<DocsState, RootState> & Getters = {
  isDocsVisible: (state: DocsState) => state.isVisible,
};

export default getters;
