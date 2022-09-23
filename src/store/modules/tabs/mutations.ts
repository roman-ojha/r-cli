import { MutationTree } from "vuex";
import { TabsState, Mutations, TabsMutationType, Tab } from "./types";

const tabsMutation: MutationTree<TabsState> & Mutations = {
  [TabsMutationType.CHANGE_TAB]: function (state: TabsState, tabId: number) {
    return (state.activeTabId = tabId);
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
    state.tabs = state.tabs.filter(
      (tab, index) => index != state.activeTabId - 1
    );
    if (state.activeTabId === 1 && state.tabs.length === 1) {
      window.electronAPI.closeWindows();
    } else if (state.activeTabId === 1 && state.tabs.length === 2) {
      state.activeTabId = 1;
    } else if (state.activeTabId === state.tabs.length) {
      state.activeTabId--;
    } else {
      state.activeTabId--;
    }
  },
};

export default tabsMutation;
