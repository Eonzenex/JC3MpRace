

global.race = {
    commands: jcmp.events.Call('get_command_manager')[0],
    chat: jcmp.events.Call('get_chat')[0],
    config: require('./gm/config'),
    utils: require('./gm/utility'),
    workarounds: require('./gm/_workarounds'),
    workarounds2: require('./gm/_workarounds2.js'),
    Race: require('./gm/race.js'),
    game: {
      players: {
        onlobby: [],
        ingame: []
      },
      toStart: false,
      StartTimer: null,
      TimerArea : 2,
      games: [],
      gamesCount: 0,
      RaceList:[],
      timeToStart: 0,
      RacePeopleDie: [],
      respawntimer: 1000 ,// 5 seconds
      RaceLaunch: true

    }
};



process.on('uncaughtException', e => console.error(e.stack || e));


// load all commands from the 'commands' directory
race.commands.loadFromDirectory(`${__dirname}/commands`, (f, ...a) => require(f)(...a));
// load all event files from the 'events' directory
race.utils.loadFilesFromDirectory(`${__dirname}/events`);

race.utils.GetRaceData();
race.config.game.timervote = race.config.game.timeToStart / 2 ;
console.log(race.config.game.timervote);

setInterval(function() {
  jcmp.events.Call('race_updates');
}, 500);



setInterval(function() {
  race.chat.broadcast("[SERVER] Press 'E' if you're vehicle is destroy or blocked it will tp you to the last checkpoint or do /reset and wait a few seconds");
}, 500000);
