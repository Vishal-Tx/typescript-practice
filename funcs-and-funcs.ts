export function printToFile(text: string,callback:()=>void):void{
    console.log(text)
    callback();
}

type mutationFunction = (v:number)=>number

export const mutateArray = (numbers:number[], mutate:mutationFunction):number[]=>{
return numbers.map(mutate)
}

console.log(mutateArray([1,2,3], (v)=>v*10))


export const createAdder = (v:number):mutationFunction=>{
    return (val:number)=>val+v
}

const adder = createAdder(55)

console.log(adder(1))