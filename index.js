const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

const channel_name = '@theChannelUsername'; // the channel username including @ and the bot must be an admin of the channel
const tag = "\n@AnyTagYouWant";

bot.start((ctx)=>{
  ctx.reply('Started');
});

bot.help((ctx)=>{
  ctx.reply('Help');
});

bot.on('text', (ctx)=>{
    let message = ctx.message.text;
    message += tag;
    ctx.telegram.sendMessage( channel_name, message );
    ctx.reply(message);
});

bot.launch()
   .then(() => console.log("Bot Launched"))
   .catch(console.log);
