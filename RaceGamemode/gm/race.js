'use strict';

module.exports = class Race {
  constructor(id, VehicleType, player, NumberofPlayer, StartingPoint, RaceCheckpoint,times,weatherr,defaultvehicle,alldefaultvehicle,addingyatspawn) {
    this.id = id;
    this.vehicletype = VehicleType;
    this.players = player;
    this.notfinish = NumberofPlayer;
    this.startingpoint = StartingPoint;
    this.raceCheckpoint = RaceCheckpoint;
    this.time = times;
    this.weather = weatherr;
    this.defaultvehicle = defaultvehicle;
    this.alldefaultvehicle = alldefaultvehicle;
    this.AddingYatrespawn = addingyatspawn;
    this.leaderboard = [];
  }

Start(){
  //TODO: Choice menu for 20 sec to choice the vehicle (settimeout)

  // alldefaultvehicle if it's true all have the same vehicle (the default) if it's false show the vehicle menu
  // if player don't take vehicle on the list before it's dissapear use the this.defaultvehicle hash

      for(var i = 0; i < this.players.length; i++) {
        const player = this.players[i];
        let rotation = new Vector3f(this.startingpoint[i].rotx,this.startingpoint[i].roty,this.startingpoint[i].rotz);
        player.race.playerrotationspawn = rotation ;
        player.position = new Vector3f(this.startingpoint[i].x,this.startingpoint[i].y,this.startingpoint[i].z);
        player.rotation = new Vector3f(this.startingpoint[i].rotx,this.startingpoint[i].roty,this.startingpoint[i].rotz);
        player.respawnPosition = new Vector3f(this.startingpoint[i].x,this.startingpoint[i].y,this.startingpoint[i].z);
        player.race.game = this;
        player.race.ingame = true;
        player.dimension = this.id;
        player.race.time = 0;
        if (this.alldefaultvehicle){
         player.race.vehicle = this.defaultvehicle;
         //jcmp.events.Call('race_player_checkpoint_respawn', player);
         setTimeout(function() {
           const vehicle = new Vehicle(player.race.vehicle, player.position,rotation);
           vehicle.dimension = player.race.game.id;
           vehicle.SetOccupant(0, player);
         }, 4000);
        }else{
        //  jcmp.events.CallRemote('race_vehicle_choice_menu',player);
        }
        setTimeout(function() {
          jcmp.events.CallRemote('race_Freeze_player',player);
        }, 1000);

        jcmp.events.CallRemote('race_set_time', player, this.time.hour, this.time.minute);
        jcmp.events.CallRemote('race_set_weather', player, this.weather);
        //spawning the first checkpoint
        let firstcheckpoint = this.raceCheckpoint[player.race.checkpoints];
        jcmp.events.CallRemote('race_checkpoint_client',player,JSON.stringify(firstcheckpoint),this.id);
        jcmp.events.CallRemote('Checkpoint_length_client',player,this.raceCheckpoint.length);
        jcmp.events.CallRemote('Checkpoint_current_client',player,player.race.checkpoints);
        jcmp.events.CallRemote('race_Start_client',player);



        }




}

  broadcast(msg, color) {
    for(let player of this.players) {
      race.chat.send(player, msg, color);
    }
  }




}
