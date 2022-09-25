import { Module } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";
import { DocsState } from "./types";
import { RootState } from "../../types";

const store: Module<DocsState, RootState> = {
  state,
  getters,
  actions,
  mutations,
};

export default store;
