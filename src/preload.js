const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  goWebsite: (url) => ipcRenderer.send("go-to-website", url),
  resizeWindow: ({ height, width }) =>
    ipcRenderer.send("resize-window", {
      height,
      width,
    }),
});
