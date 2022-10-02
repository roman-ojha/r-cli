export {};

declare global {
  interface Window {
    electronAPI: {
      minimizeWindow: () => void;
      toggleFullScreen: () => void;
      closeWindows: () => void;
      sendTerminalData: (e: string) => void;
      terminalIncoming: (data: any) => void;
    };
  }
}
