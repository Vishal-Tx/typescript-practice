interface coordinate{
    x: number,
    y: number
}

// function parseCoordinateFromObject(obj:coordinate):coordinate{
//     return {...obj}
// }

// function parseCoordinateFromNumbers(x:number, y:number):coordinate{
//     return {x,y}
// }

function parseCoordinate(obj:coordinate):coordinate;
function parseCoordinate(x:number, y:number):coordinate;
function parseCoordinate(arg1:unknown, arg2?:unknown):coordinate{
let coord:coordinate = {x:0,y:0}
if(typeof arg1 === 'object'){
    coord =  {...arg1 as coordinate }
}
else{
    coord = {x:arg1 as number,y:arg2 as number}}
    return coord
}

console.log(parseCoordinate({x:23,y:45}))
console.log(parseCoordinate(24,67))
