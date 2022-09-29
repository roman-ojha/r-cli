import { RootState } from "../../types";
import {
  ActionContext,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from "vuex";

export interface TerminalListState {
  isVisible: boolean;
}

export interface Getters {
  isTerminalListVisible(
    state: TerminalListState
  ): TerminalListState["isVisible"];
}

export enum DocsActionType {}

export interface Actions {}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<TerminalListState, RootState>, "commit">;

export enum DocsMutationType {
  CHANGE_TERMINAL_VISIBILITY = "CHANGE_TERMINAL_VISIBILITY",
}

export type Mutations<S = TerminalListState> = {
  [DocsMutationType.CHANGE_TERMINAL_VISIBILITY](state: S): void;
};

export type DocsStore<S = TerminalListState> = Omit<
  VuexStore<S>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};
