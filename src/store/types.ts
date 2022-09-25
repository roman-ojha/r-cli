import { TabsState, TabsStore } from "./modules/tabs/types";
import { DocsState, DocsStore } from "./modules/docs/types";

export type RootState = {
  tabs: TabsState;
  docs: DocsState;
};

export type Store =
  | TabsStore<Pick<RootState, "tabs">>
  | DocsStore<Pick<RootState, "docs">>;
