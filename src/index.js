
const venom = require('venom-bot');
const puppeteer = require('puppeteer');
venom.create({session: 'session-name', puppeteerOptions: {args: ['--no-sandbox']}}).then((client) => start(client)).catch((erro) => {console.log(erro);});
function start(client) {
  puppeteer.launch({args: ['--no-sandbox']});
  client.onMessage(async (message) => {
    console.log(message.body)
  });
}
