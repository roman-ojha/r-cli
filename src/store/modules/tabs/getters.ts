import { GetterTree } from "vuex";
import { RootState } from "../../types";
import { TabsState, Getters, TabsGettersType } from "./types";

const tabsGetters: GetterTree<TabsState, RootState> & Getters = {
  activeTab: (state: TabsState) => state.activeTab,
  numberOfTab: (state: TabsState) => state.numberOfTabs,
};

export default tabsGetters;
