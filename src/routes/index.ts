import { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import TabVue from "../components/CLIPlayground/Tab/Index.vue";
import { useStore } from "../store";

const store = useStore();
const tabInfo = store.getters["getTabInfo"];

// creating dynamic route using map
export const routes: RouteRecordRaw[] = tabInfo.map(
  (tab) =>
    <RouteRecordRaw>{
      path: `/${tab.id}`,
      component: TabVue,
    }
);
