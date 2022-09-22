import { TabsState, TabsStore } from "./modules/tabs/types";

export type RootState = {
  tabs: TabsState;
};

export type Store = TabsStore<Pick<RootState, "tabs">>;
