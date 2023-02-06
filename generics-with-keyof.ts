// pluck

const pluck = <DataType,keyType extends keyof DataType >(items:DataType[], key:keyType):DataType[keyType][]=>{
return items.map(item=>item[key])
}

const dogs = [{name:"fifi", age:4},{name:"Kion", age:6},{name:"Plol", age:8},{name:"fhii", age:12}]

console.log(pluck(dogs, "age"))
console.log(pluck(dogs, "name"))

console.log(pluck([{id:"1445", age:"23"}], "age"))



interface BaseEvent{
    time:number;
    user:string
}

interface Eventmap{
    addToCart:BaseEvent & {quantity:number; productID:string;}
    checkout:BaseEvent
}

const sendEvent = <Name extends keyof Eventmap>(name:Name,data:Eventmap[Name]):void=>{
    console.log([name,data])
}


sendEvent("addToCart",{productID:"1Ed23",quantity:2,time:45,user:"Harry"})
sendEvent("checkout",{time:25,user:"Joel"})