import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  minimizeWindow: () => ipcRenderer.send("minimize-window"),
  toggleFullScreen: () => ipcRenderer.send("toggle-fullscreen"),
  closeWindows: () => ipcRenderer.send("close-windows"),
  sendTerminalData: (e: string) => ipcRenderer.send("send-terminal-data", e),
  terminalIncoming: (data: any) => {
    ipcRenderer.on("terminal-incoming", data);
  },
});
