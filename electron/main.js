const { app, BrowserWindow, Notification } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');
const fs = require('fs');
const log = require('electron-log');

const isDev = !app.isPackaged;

autoUpdater.autoDownload = false;
autoUpdater.autoInstallOnAppQuit = true;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
    },
    icon: path.join(__dirname, 'icon.png'),
  });

  if (isDev) {
    mainWindow.loadURL('http://localhost:5173');
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(() => {
  if (process.platform === 'win32') {
    app.setAppUserModelId('com.alva.app');
  }

  createWindow();

  autoUpdater.checkForUpdates();

  

  // Eventos do autoUpdater com notificações simples
  autoUpdater.on('checking-for-update', () => {
    console.log('[autoUpdater] checking-for-update');
    mainWindow.blur();
    new Notification({
      title: 'Atualização',
      body: 'Procurando por uma nova versão...',
      icon: path.join(__dirname, 'icon.png'),
    }).show();
  });

  autoUpdater.on('update-available', (info) => {
    mainWindow.blur();
    new Notification({
      title: 'Atualização disponível',
      body: `Versão ${info.version} encontrada. Baixando...`,
      icon: path.join(__dirname, 'icon.png'),
    }).show();

    autoUpdater.downloadUpdate();
  });

  autoUpdater.on('update-not-available', () => {
    mainWindow.blur();
    new Notification({
      title: 'Atualização',
      body: 'Você já está na versão mais recente.',
      icon: path.join(__dirname, 'icon.png'),
    }).show();
  });

  autoUpdater.on('update-downloaded', () => {
    mainWindow.blur();
    new Notification({
      title: 'Atualização pronta',
      body: 'A aplicação será reiniciada para instalar a nova versão.',
      icon: path.join(__dirname, 'icon.png'),
    }).show();

    setTimeout(() => {
      autoUpdater.quitAndInstall();
    }, 4000);
  });

  autoUpdater.on('error', (err) => {
  mainWindow.blur();
  new Notification({
    title: 'Erro na atualização',
    body: err.message || 'Erro desconhecido.',
    icon: path.join(__dirname, 'icon.png'),
  }).show();
  log.error('Erro na atualização:', err.message);
  log.error('Update feed URL:', autoUpdater.updateConfigPath);
});

  // Inicia a verificação de updates
  autoUpdater.checkForUpdates();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('before-quit', () => {
  autoUpdater.quitAndInstall();
});
