// pluck

const fluck = <DataType,keyType extends keyof DataType >(items:DataType[], key:keyType):DataType[keyType][]=>{
return items.map(item=>item[key])
}

const dogs = [{name:"fifi", age:4},{name:"Kion", age:6},{name:"Plol", age:8},{name:"fhii", age:12}]

console.log(fluck(dogs, "age"))
console.log(fluck(dogs, "name"))
