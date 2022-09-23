import { MutationTree } from "vuex";
import { TabsState, Mutations, TabsMutationType, Tab } from "./types";

const tabsMutation: MutationTree<TabsState> & Mutations = {
  [TabsMutationType.CHANGE_TAB]: function (state: TabsState, tabNo: number) {
    return (state.activeTab = tabNo);
  },
  [TabsMutationType.OPEN_NEW_TAB]: function (state: TabsState) {
    if (state.numberOfTabs < 10) {
      state.numberOfTabs++;
      state.tabs.push({
        name: `R-CLI ${state.tabs[state.tabs.length - 1].id + 1}`,
        id: state.tabs[state.tabs.length - 1].id + 1,
      });
    }
  },
  [TabsMutationType.CLOSE_CURRENT_TAB]: function (state: TabsState) {
    state.tabs = state.tabs.filter(
      (tab, index) => index != state.activeTab - 1
    );
    if (state.activeTab === 1 && state.numberOfTabs === 1) {
      window.electronAPI.closeWindows();
    } else if (state.activeTab === 1 && state.numberOfTabs === 2) {
      state.activeTab = 1;
    } else if (state.activeTab === state.numberOfTabs) {
      state.activeTab--;
    } else {
      state.activeTab--;
    }
    state.numberOfTabs--;
  },
};

export default tabsMutation;
