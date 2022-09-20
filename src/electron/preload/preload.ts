import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  minimizeWindow: () => ipcRenderer.send("minimize-window"),
  toggleFullScreen: () => ipcRenderer.send("toggle-fullscreen"),
  closeWindows: () => ipcRenderer.send("close-windows"),
});
