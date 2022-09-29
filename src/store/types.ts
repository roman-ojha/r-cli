import { TabsState, TabsStore } from "./modules/tabs/types";
import { DocsState, DocsStore } from "./modules/docs/types";
import {
  TerminalListState,
  TerminalListStore,
} from "./modules/terminalList/types";

export type RootState = {
  tabs: TabsState;
  docs: DocsState;
  terminalList: TerminalListState;
};

export type Store = TabsStore<Pick<RootState, "tabs">> &
  DocsStore<Pick<RootState, "docs">> &
  TerminalListStore<Pick<RootState, "terminalList">>;
