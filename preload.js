const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
    openOverlay: () => ipcRenderer.send("open-overlay")
});
