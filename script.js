var worlds = [];


while (true) {
    var world = prompt('dime palabras');

    if(world === null || world.trim() ===''){
        break;
    }
   worlds.push(world);
} 
const uniqueWorlds=new Set(worlds);

const list = [...uniqueWorlds].sort().reverse();

alert('listado de palabras ordenadas:' + list.join(', '));





