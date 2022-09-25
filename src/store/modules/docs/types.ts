import { RootState } from "../../types";
import {
  ActionContext,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from "vuex";

export interface DocsState {
  isVisible: boolean;
}

export interface Getters {
  isDocsVisible(state: DocsState): DocsState["isVisible"];
}

export enum DocsActionType {
  TOGGLE_DOCS = "TOGGLE_DOCS",
}

export interface Actions {
  [DocsActionType.TOGGLE_DOCS]({ commit }: AugmentedActionContext): void;
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<DocsState, RootState>, "commit">;

export enum DocsMutationType {
  TOGGLE_DOCS = "TOGGLE_DOCS",
}

export type Mutations<S = DocsState> = {
  [DocsMutationType.TOGGLE_DOCS](state: S): void;
};

export type DocsStore<S = DocsState> = Omit<
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
