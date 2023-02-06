type ThreeDCoordinates = [x:number, y:number, z:number];

const add3DCoordinates = (c1:ThreeDCoordinates, c2:ThreeDCoordinates):ThreeDCoordinates=>{
    return [
        c1[1]+c2[1],
        c1[0]+c2[0],
        c1[2]+c2[2],
        

    ]
}

console.log(add3DCoordinates([2,1,3],[2,3,1]))


const simpleStringState=(initialState:string):[() => string, (v:string)=>void]=>{
    let str:string = initialState
    return[
        ()=>str,
        (v:string)=>str=v
    ]
}

const [getvalue, setvalue] = simpleStringState("Hello")
console.log("getvalue",getvalue())
setvalue("yolo")
console.log("getvalue",getvalue())


function stringState(initialState:string):[string, (v:string)=>void]{
    let str:string = initialState
    return [
        str,
        (v:string)=>str=v
    ]
}
const [getstring, setString] = simpleStringState("Luke")

console.log("getvalue",getstring())
setString("Ray")
console.log("getvalue",getstring())