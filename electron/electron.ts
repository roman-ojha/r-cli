"use strict";
import { app, protocol, BrowserWindow, ipcMain } from "electron";
import installExtension, { VUEJS3_DEVTOOLS } from "electron-devtools-installer";
import windowsStateKeeper from "electron-window-state";
import path from "path";
import electronReloader from "electron-reloader";

const isDev = process.env.IS_DEV == "true" ? true : false;
if (isDev) {
  try {
    // require("electron-reloader")(module);
    electronReloader(module);
  } catch (err) {
    console.log(err);
  }
}

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
    title: "R-CLI",
    webPreferences: {
      nodeIntegration: process.env
        .ELECTRON_NODE_INTEGRATION as unknown as boolean,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      preload: path.join(__dirname, "./preload.js"),
    },
    icon: __dirname + "/assets/ico/appicon.ico",
    frame: false,
  });

  mainWindowsState.manage(win);
  win.loadURL(
    isDev
      ? "http://localhost:5173"
      : `file://${path.join(__dirname, "../../dist/index.html")}`
  );
  if (isDev) {
    // win.webContents.openDevTools({ mode: "detach" });
    win.webContents.openDevTools();
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
  if (isDev && !process.env.IS_TEST) {
    try {
      await installExtension(VUEJS3_DEVTOOLS);
    } catch (e) {
      // console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
});

if (isDev) {
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
