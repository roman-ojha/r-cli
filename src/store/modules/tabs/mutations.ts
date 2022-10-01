import { MutationTree } from "vuex";
import { TerminalProgram } from "../terminalList/types";
import { TabsState, Mutations, TabsMutationType, Tab } from "./types";

const tabsMutation: MutationTree<TabsState> & Mutations = {
  [TabsMutationType.CHANGE_TAB]: function (state: TabsState, tabId: number) {
    state.activeTabId = tabId;
    state.activeTabIndex = state.tabs.findIndex((tab) => tab.id === tabId);
  },
  [TabsMutationType.OPEN_NEW_TAB]: function (
    state: TabsState,
    payload: {
      terminal: TerminalProgram;
      lastTerminal: boolean;
    }
  ) {
    if (state.tabs.length < 10) {
      if (payload.lastTerminal && payload.terminal === null) {
        const lastTerminal = state.tabs[state.tabs.length - 1].program;
        if (lastTerminal === "r-cli") {
          state.tabs.push({
            name: `R-CLI`,
            id: state.tabs[state.tabs.length - 1].id + 1,
            program: "r-cli",
          });
        } else if (lastTerminal === "cmd") {
          state.tabs.push({
            name: `Cmd`,
            id: state.tabs[state.tabs.length - 1].id + 1,
            program: "cmd",
          });
        } else if (lastTerminal === "powershell") {
          state.tabs.push({
            name: `Powershell`,
            id: state.tabs[state.tabs.length - 1].id + 1,
            program: "powershell",
          });
        }
      } else {
        if (payload.terminal === "r-cli") {
          state.tabs.push({
            name: `R-CLI`,
            id: state.tabs[state.tabs.length - 1].id + 1,
            program: "r-cli",
          });
        } else if (payload.terminal === "cmd") {
          state.tabs.push({
            name: `Cmd`,
            id: state.tabs[state.tabs.length - 1].id + 1,
            program: "cmd",
          });
        } else if (payload.terminal === "powershell") {
          state.tabs.push({
            name: `Powershell`,
            id: state.tabs[state.tabs.length - 1].id + 1,
            program: "powershell",
          });
        }
      }
    }
  },
  [TabsMutationType.CLOSE_CURRENT_TAB]: function (state: TabsState) {
    state.tabs = state.tabs.filter((tab) => tab.id !== state.activeTabId);
    if (state.tabs.length === 0) {
      window.electronAPI.closeWindows();
    } else {
      if (state.activeTabIndex === 0) {
        console.log("first");
        state.activeTabId = state.tabs[0].id;
      } else if (state.activeTabIndex === state.tabs.length) {
        console.log("last");
        state.activeTabId = state.tabs[state.tabs.length - 1].id;
      } else {
        console.log("middle");
        state.activeTabId = state.tabs[state.activeTabIndex].id;
      }
      state.activeTabIndex = state.tabs.findIndex(
        (tab) => tab.id === state.activeTabId
      );
    }
  },
  [TabsMutationType.RENAME_TAB_TITLE](state: TabsState, newName: string) {
    state.tabs[state.activeTabIndex].name = newName;
  },
};

export default tabsMutation;
