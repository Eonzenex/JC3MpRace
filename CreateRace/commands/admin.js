'use strict';
//TODO: All saving on the same file on a JSON with the other parameter : name and VehicleType
//TODO: making with interface(html,css) to be more easy and use POI and checkpoint for preview of the race ?
module.exports = ({ Command, manager }) => {
  manager.category('admin', 'sample commands for creating race')

	  .add(new Command('startingpoint').description('Save a position to file for starting point').handler(function(player) {


    var fs = require('fs');

    var startingpoint = `{"x": ${player.position.x},"y":${player.position.y},"z":${player.position.z},"rotx":${player.rotation.x},"roty":${player.rotation.y},"rotz":${player.rotation.z}}\n`;

    if(!fs.existsSync('./startingpoint.txt')) {
      fs.writeFileSync("./startingpoint.txt", startingpoint);
    } else {
      fs.appendFileSync("./startingpoint.txt", startingpoint);
    }

    createrace.chat.send(player, "Position saved sucesfully", createrace.config.colours.command_success);
  }));

.add(new Command('checkpoint').description('Save a position to file for checkpoint').handler(function(player) {


var fs = require('fs');


var checkpointpoint = `{"x": ${player.position.x},"y":${player.position.y},"z":${player.position.z},"rotx":${player.rotation.x},"roty":${player.rotation.y},"rotz":${player.rotation.z},"id":${freeroam.id}}\n`;
createrace.id ++;
if(!fs.existsSync('./checkpoint.txt')) {
  fs.writeFileSync("./checkpoint.txt", checkpointpoint);
} else {
  fs.appendFileSync("./checkpoint.txt", checkpointpoint);
}

createrace.chat.send(player, "Position saved sucesfully", createrace.config.colours.command_success);
}));
};

.add(new Command('resetraceid').description('Reset the race id for checkpoint').handler(function(player) {

createrace.id = 0;

createrace.chat.send(player, "ID changed to 0", createrace.config.colours.command_success);
}));

.add(new Command('spawnairplane').description('spawn an airplanes').handler(function(player) {

  const vehicle = new Vehicle(448735752, player.position, player.rotation);
  vehicle.dimension = player.race.game.id;
  setTimeout(function() {
    vehicle.SetOccupant(0, player);
  }, 100);


createrace.chat.send(player, "spawn airplanes", createrace.config.colours.command_success);
}));

.add(new Command('spawnboats').description('spawn an boats').handler(function(player) {

  const vehicle = new Vehicle(2474676614, player.position, player.rotation);
  vehicle.dimension = player.race.game.id;
  setTimeout(function() {
    vehicle.SetOccupant(0, player);
  }, 100);


createrace.chat.send(player, "spawn boats", createrace.config.colours.command_success);
}));
};
