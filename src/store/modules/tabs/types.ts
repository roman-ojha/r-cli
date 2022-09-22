import { RootState } from "../../types";

export interface Tab {
  name: string;
}

export interface TabsState {
  numberOfTabs: number;
  activeTab: number;
  tabs: Tab[];
}

export enum TabsGettersType {
  ACTIVE_TAB = "ACTIVE_TAB",
  NUMBER_OF_TAB = "NUMBER_OF_TAB",
}

export interface Getters {
  activeTab(state: TabsState): number;
  numberOfTab(state: TabsState): number;
}

export enum TabsActionType {
  CHANGE_TAB = "CHANGE_TAB",
  OPEN_NEW_TAB = "OPEN_NEW_TAB",
}

export interface Actions {
  [TabsActionType.CHANGE_TAB]({
    commit,
  }: AugmentedActionContext): Promise<void>;
  [TabsActionType.OPEN_NEW_TAB]({
    commit,
  }: AugmentedActionContext): Promise<void>;
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;
