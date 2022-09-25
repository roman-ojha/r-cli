import { ActionTree, ActionContext } from "vuex";
import { DocsActionType, DocsMutationType, DocsState, Actions } from "./types";
import { RootState } from "../../types";

const actions: ActionTree<DocsState, RootState> & Actions = {
  [DocsActionType.TOGGLE_DOCS]({ commit }) {},
};

export default actions;
