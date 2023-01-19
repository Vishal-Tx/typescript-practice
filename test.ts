let a: string = "hello";
let b: boolean = true;

a += " world";

let mynumber: number = 10


let myRegex: RegExp = /foo/

const aArray:string[] = a.split("");
console.log(aArray)

const myvalues:Array<number> = [1,2,3,4]

console.log( a);

interface preson {
    fName: string;
    lName: string;
    cool:boolean
}
const myPerson: preson = {
    fName:"John",
    lName:"Doe",
    cool:true
}

const ids:Record<number,string> = {
    10:"a",
    20:"b"
}
ids[30] = "c"

if(ids[30]==="b"){
    console.log("true");
    
}
else{
    console.log("false");
}

for(let i=0; i<=10;i++){
    console.log(i)
}

[1,2,3].forEach(v=>console.log(v))

const ex:number[] = [4,5,6].map(num =>num*10)
console.log(ex)