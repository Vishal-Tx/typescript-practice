interface Name {
    first:string;
    last:string;
}
interface fullname extends Name{
    fullName:string
}
const addFullName = (name:Name):fullname=>{
    return {
        ...name,
        fullName:`${name.first} ${name.last}`
    }
}

const n = addFullName({first:"Vishal", last:"gupta"})

console.log(n)

const permuteRow = <T extends (...args:any)=>any>(iteratorFunc:T, data:Parameters<T>[0][]):ReturnType<T>[]=>{
return data.map(iteratorFunc)
}

console.log(permuteRow(addFullName, [{first:"Hello", last:"World"},{first:"Arigato", last:"Scatto"}]))