"use strict";
import { app, protocol, BrowserWindow, ipcMain } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS3_DEVTOOLS } from "electron-devtools-installer";
import windowsStateKeeper from "electron-window-state";
import path from "path";

const isDevelopment = process.env.NODE_ENV !== "production";

protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

async function createWindow() {
  const mainWindowsState = windowsStateKeeper({
    defaultHeight: 800,
    defaultWidth: 1280,
  });
  const win = new BrowserWindow({
    width: mainWindowsState.width,
    height: mainWindowsState.height,
    x: mainWindowsState.x,
    y: mainWindowsState.y,
    title: "RCLI",
    webPreferences: {
      // nodeIntegration: process.env
      //   .ELECTRON_NODE_INTEGRATION as unknown as boolean,
      nodeIntegration: true,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      preload: path.join(__dirname, "../preload/preload.js"),
    },
    icon: __dirname + "/assets/ico/appicon.ico",
    frame: false,
  });

  mainWindowsState.manage(win);
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string);
    // await win.webContents.openDevTools();
  } else {
    createProtocol("app");
    win.loadURL("app://./index.html");
  }
  ipcMain.on("minimize-window", function () {
    win.minimize();
  });
  ipcMain.on("toggle-fullscreen", function () {
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  });
  ipcMain.on("close-windows", function () {
    win.close();
  });
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    try {
      await installExtension(VUEJS3_DEVTOOLS);
    } catch (e) {
      // console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
});

if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
