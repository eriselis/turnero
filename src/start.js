var Botkit = require('botkit');

var partidos = [];
var controller = Botkit.slackbot({
  debug: false
  //include "log: false" to disable logging
  //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});

// connect the bot to a stream of messages
controller.spawn({
  token: 'xoxb-110725424215-5WHFPEx5aqQ3p0oajGwSPNlP',
}).startRTM()

// give the bot something to listen for.
controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {

  bot.reply(message,'Hello yourself.');

});


controller.hears('juegan-lista',['direct_message','direct_mention','mention'],function(bot,message) {
	console.log(message);

//obtengo los partidos del dia

	bot.reply(message,'se listan los partidos.');	
	for (var i = 0; i < partidos.length; i++) {
    bot.reply(message,partidos[i]);	
	}

});


controller.hears('juegan',['direct_message','direct_mention','mention'],function(bot,message) {
	console.log(message);

	var partido = message.text.split(/\s+/);
	var user1 = partido[1].replace(/[^\w\s]/gi, '');
	var user2 = partido[2].replace(/[^\w\s]/gi, '');

	var username1;
	var username2;

	bot.api.users.info({user:user1},function(err,response) {
 		username1 = response.user.name;
 		console.log(username1);

		bot.api.users.info({user:user2},function(err,response) {
	 		username2 = response.user.name;

	 		console.log(username1 + ' - ' + username2);
			//partidos.push('@'+ username1 + ' - ' + '@'+ username2);
			partidos.push(partido[1] + ' ' + partido[2]);
			console.log(partidos);
			bot.reply(message,'se puede generar un partido.');	

		}); 		

	});

	

	

});
