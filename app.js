// Config
const config = require('./config.json');

// ---- Discord Core ----
const Discord = require('discord.js'),
      bot = new Discord.Client();

// ---- Node CRON -----
var cron = require('node-cron');

// ---- Mods ----
let JG_AutomaticPost;

JG_AutomaticPost = require("./mods/twitter/JamyGourmaudPosts/jamyGourmaudAutomaticPost.js");


/* Check Config for Mods */
if(config.twitter_credentials.consumer_key != null) {
    console.log("Loading Twitter_Mod");
    console.log("Done !");
} else {
    console.log("Require config for Twitter_Mod");
}


bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    // Print GamePlayed Management
    bot.user.setActivity(config.bot.playedGame).catch(console.error);
});


bot.login(config.bot.token);
console.log('Bot has been Started !')

// Run once JamyGourmaud Post scripts
JG_AutomaticPost.main(bot);

// and set automatic shcedule
cron.schedule('0 */5 * * *', () => {
    JG_AutomaticPost.main(bot);
    console.log('running task for JamyGourmaud Post');
  });
console.log('Schedule job for JamyGourmaud Post Created ! (running every 5 hours)');