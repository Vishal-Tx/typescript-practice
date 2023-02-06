interface cat{
     name: string;
    breed: string;
}

// make every field readonly,doest let you reassign value later, gives error
type readOnlyCat = Readonly<cat>
function makeCat(name: string,breed: string):Readonly<cat>{
    return {name,breed}
}

const beerus = makeCat("beerus","Persian")
console.log(beerus)

const makeCoordinat = (x:number, y:number, z:number):readonly[number,number,number]=>{
return [x,y,z]
}

const coo = makeCoordinat(23,34,54)
console.log(coo)
coo[1] = 100
console.log(coo)

const reallyConst  = [23,23,52] as const
reallyConst[0] = 23
