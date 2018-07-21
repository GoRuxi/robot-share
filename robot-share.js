var express=require('express');
//var appR=express();
var appC=express();

//Static resources for joystick client
//appC.use('/control',express.static(__dirname+'/www'));
/*
var serverR=appR.listen(8048,function(){
    var port=serverR.address().port;
    console.log('Server for robots running at port %s',port);
});
*/
var serverC=appC.listen(8049,function(){
    var port=serverC.address().port;
    console.log('Server for controls running at port %s',port);
});

//var ioR=require('socket.io')(serverR);
var ioC=require('socket.io')(serverC);
var robots=new Array();
var controls=new Array();
var clientsR=new Array();
var clientsC=new Array();
/*
ioR.on('connection',function(client){
    console.log('Client Robot connected:');
    console.log(client);
    clientsR.push(client);

    client.on('disconnect',function(){
        for(var i=0;i<clientsR.length;i++){
            if(clientsR[i].id===client.id)
            clientsR.splice(i,1);
        }
        for(var j=0;j<robots.length;j++){
            if(robots[j].sourceId===client.id)
            robots.splice(j,1);
        }

    });

    client.on('robot_join_game',function(robotJSON){
        console.log('Client Robot join game');
    });

    client.on('info', function(data){
        console.log('Client Robot info');
        
    });

});
*/
ioC.on('connection',function(client){
    console.log('Client Control connected:');
    console.log(client);
//    clientsC.push(client);

    client.on('disconnect',function(){
    console.log('Client Control deconectat');
        for(var i=0;i<clientsC.length;i++){
            if(clientsC[i].id===client.id)
            clientsC.splice(i,1);
        }
        for(var j=0;j<controls.length;j++){
            if(controls[j].sourceId===client.id)
            controls.splice(j,1);
        }

    });

    client.on('control_join_game',function(controlJSON){
        console.log('Client Control join game');
    });

    client.on('info', function(data){
        console.log('Client Control info');
        
    });

});


