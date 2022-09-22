import { ActionTree, ActionContext } from "vuex";
import { TabsState, TabsMutationType, TabsActionType, Actions } from "./types";
import { RootState } from "../../types";

const tabsActions: ActionTree<TabsState, RootState> & Actions = {
  // [TabsActionType.CHANGE_TAB]({ commit }, todoNo: number) {
  //   commit(TabsMutationType.CHANGE_TAB, todoNo);
  // },
  // [TabsActionType.OPEN_NEW_TAB]({ commit }) {
  //   commit(TabsMutationType.OPEN_NEW_TAB);
  // },
};

export default tabsActions;
