import { MutationTree } from "vuex";
import { TabsState, Mutations, TabsMutationType, Tab } from "./types";

const tabsMutation: MutationTree<TabsState> & Mutations = {
  [TabsMutationType.CHANGE_TAB]: function (state: TabsState, tabId: number) {
    state.activeTabId = tabId;
    state.activeTabIndex = state.tabs.findIndex((tab) => tab.id === tabId);
  },
  [TabsMutationType.OPEN_NEW_TAB]: function (state: TabsState) {
    if (state.tabs.length < 10) {
      state.tabs.push({
        name: `R-CLI ${state.tabs[state.tabs.length - 1].id + 1}`,
        id: state.tabs[state.tabs.length - 1].id + 1,
      });
    }
  },
  [TabsMutationType.CLOSE_CURRENT_TAB]: function (state: TabsState) {
    state.tabs = state.tabs.filter((tab) => tab.id !== state.activeTabId);
    if (state.tabs.length === 0) {
      window.electronAPI.closeWindows();
    } else {
      state.activeTabId = state.tabs[0].id;
      state.activeTabIndex = state.tabs.findIndex(
        (tab) => tab.id === state.activeTabId
      );
    }
  },
};

export default tabsMutation;
