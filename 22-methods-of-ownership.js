// James Machado Hernandez
// Métodos de propiedad 

const player = {
    play : function(id){
        console.log("Playing song...", id);
    },
    pause : function (id){
        console.log(`Pausing..., ${id}`);
    },
    eliminate : function (id){
        console.log(`the song is eliminated..., ${id}`);
    },
    create : function (){
        console.log(`creating the play list...`);


    }
}

console.log(player);
player.play(217);
player.pause(217);
player.eliminate(217);
player.create();