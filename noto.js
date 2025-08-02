
const { app, Notification } = require('electron');

app.whenReady().then(() => {
  new Notification({
    title: 'Teste de Notificação',
    body: 'Se você está vendo isso, a notificação funciona!'
  }).show();
});
