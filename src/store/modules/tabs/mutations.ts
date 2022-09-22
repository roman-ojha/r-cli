import { MutationTree } from "vuex";
import { TabsState, Mutations, TabsMutationType } from "./types";

const tabsMutation: MutationTree<TabsState> & Mutations = {
  [TabsMutationType.CHANGE_TAB]: function (state: TabsState, tabNo: number) {
    return (state.activeTab = tabNo);
  },
  [TabsMutationType.OPEN_NEW_TAB]: function (state: TabsState) {
    if (state.numberOfTabs <= 10) {
      state.numberOfTabs++;
    }
  },
};