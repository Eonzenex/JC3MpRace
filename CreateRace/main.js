
global.createrace = {
    commands: jcmp.events.Call('get_command_manager')[0],
    chat: jcmp.events.Call('get_chat')[0],
  
    workarounds: require('./gm/_workarounds'),
    workarounds2: require('./gm/_workarounds2.js'),
    id : 0

};



process.on('uncaughtException', e => console.error(e.stack || e));


// load all commands from the 'commands' directory
race.commands.loadFromDirectory(`${__dirname}/commands`, (f, ...a) => require(f)(...a));
// load all event files from the 'events' directory
race.utils.loadFilesFromDirectory(`${__dirname}/events`);

race.utils.GetRaceData();

setInterval(function() {
  jcmp.events.Call('race_updates');
}, 500);
