const { Notification } = require('electron');
const path = require('path');

function showSafeNotification(mainWindow, { title, body, iconPath }) {
  // Retira o foco da janela (evita bloqueio de notificação no Windows)
  if (mainWindow && typeof mainWindow.blur === 'function') {
    mainWindow.blur();
  }

  // Cria e exibe a notificação
  const notification = new Notification({
    title,
    body,
    icon: iconPath || path.join(__dirname, 'icon.png'),
  });

  notification.show();
}

module.exports = { showSafeNotification };
