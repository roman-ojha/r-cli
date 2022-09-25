import { MutationTree } from "vuex";
import { DocsState, Mutations, DocsMutationType } from "./types";

const mutations: MutationTree<DocsState> & Mutations = {
  [DocsMutationType.TOGGLE_DOCS](state: DocsState) {
    state.isVisible = !state.isVisible;
  },
};

export default mutations;
