import { app, protocol, BrowserWindow, ipcMain } from "electron";
import windowsStateKeeper from "electron-window-state";
import path from "path";
import electronReloader from "electron-reloader";
import os from "os";
import pty from "node-pty";
var shell = os.platform() === "win32" ? "powershell.exe" : "bash";
console.log(shell);

const isDev = process.env.IS_DEV == "true" ? true : false;
if (isDev) {
  try {
    electronReloader(module);
  } catch (err) {
    // console.log(err);
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
    minWidth: 550,
    minHeight: 360,
    x: mainWindowsState.x,
    y: mainWindowsState.y,
    title: "R-CLI",
    webPreferences: {
      // nodeIntegration: process.env
      //   .ELECTRON_NODE_INTEGRATION as unknown as boolean,
      // contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      nodeIntegration: true,
      preload: path.join(__dirname, "./preload.js"),
    },
    icon: path.join(__dirname, "../../assets/appicon.ico"),
    frame: false,
  });

  mainWindowsState.manage(win);
  win.loadURL(
    isDev
      ? "http://localhost:5173"
      : `file://${path.join(__dirname, "../../dist/index.html")}`
  );
  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
    // win.webContents.openDevTools();
  }

  const ptyProcess = pty.spawn(shell, [], {
    name: "xterm-color",
    cols: 80,
    rows: 24,
    cwd: process.env.HOME,
    env: process.env as { [key: string]: string },
  });

  ptyProcess.on("data", function (data) {
    // data coming from terminal
    // and sending that front-end
    win.webContents.send("terminal-incoming", data);
  });

  ipcMain.on("send-terminal-data", (event, data) => {
    // data going to the terminal
    ptyProcess.write(data);
  });

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

app.whenReady().then(() => {
  createWindow();
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
