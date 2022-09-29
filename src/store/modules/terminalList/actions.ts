import { ActionTree, ActionContext } from "vuex";
import {
  TerminalListActionType,
  TerminalListMutationType,
  TerminalListState,
  Actions,
} from "./types";
import { RootState } from "../../types";

const actions: ActionTree<TerminalListState, RootState> & Actions = {};

export default actions;
