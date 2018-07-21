
var app=require('http').createServer(handler);
var io=require('socket.io')(app);
app.listen(8050);

function handler(req,res){
    res.writeHead(200);
    res.end('Sunt viu');
}


var robots=new Array();
var controls=new Array();
var clientsR=new Array();
var clientsC=new Array();

io.on('connection',function(client){
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



