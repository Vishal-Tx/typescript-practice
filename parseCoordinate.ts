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

// function parseCoordinate(obj:coordinate):coordinate;
// function parseCoordinate(x:number, y:number):coordinate;
// function parseCoordinate(str:string):coordinate;

// function parseCoordinate(arg1:unknown, arg2?:unknown):coordinate{
// let coord:coordinate = {x:0,y:0}
// if(typeof arg1 === 'object'){
//     coord =  {...arg1 as coordinate }
// }
// else if(typeof arg1=== 'string'){
//  (arg1 as string).split(",").forEach((str)=>{
//     const [key,val] = str.trim().split(":")
//     coord[key as "x"|"y"] = parseInt(val)
//  })
// }
// else{
//     coord = {x:arg1 as number,y:arg2 as number}}
//     return coord
// }

// console.log(parseCoordinate({x:23,y:45}))
// console.log(parseCoordinate(24,67))
// console.log(parseCoordinate("x:12, y:32"))

// const strr = "x:12, y:32";
// let cord:coordinate
// const stra = strr.split(",").forEach(str =>
//     { const [key,value] = str.split(":");
//     cord[key as "x"|"y"] = parseInt(value,10)
// })

// console.log(stra)

function parseCoordinates(obj:coordinate):coordinate;
function parseCoordinates(x:number, y:number):coordinate;
function parseCoordinates(arg1:string):coordinate;

function parseCoordinates(arg1:unknown, arg2?:unknown):coordinate{
    let coord:coordinate = {
        x:0,
        y:0
    }

    if(typeof arg1 === "object"){
        coord = {
            ...arg1 as coordinate
        }
    }
    else if(typeof arg1 === "string"){
        (arg1 as string).split(",").forEach(str=>{const [key,value]=str.split(":")
    coord[key as "x"|"y"] = parseInt(value,10)})
    }
    
    else{
        coord = {
            x:arg1 as number,
            y:arg2 as number
        }
    }
    return coord
}

console.log(parseCoordinates({x:12,y:34}))
console.log(parseCoordinates(44,98))
console.log(parseCoordinates("x:44,y:55"))





