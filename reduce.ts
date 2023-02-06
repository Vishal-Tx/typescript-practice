function myForEach<T>(items:T[],forEachFunc:(v:T)=>void):void{
items.reduce((a,v)=>{
    forEachFunc(v)
    return undefined
},undefined)
}

myForEach(["a", "b"],(v)=>console.log(`myForEach for ${v}`))


function myFilter<T>(items:T[],filterFunc:(v:T)=>boolean):T[]{
    return items.reduce((a,v)=>(filterFunc(v)?[...a,v]:a),[] as T[])
}

console.log(myFilter([1,2,3,4,5,6,7,8,9,10], (v)=>v>5))

function myMap<T,K>(items:T[],mapFunc:(v:T)=>K):K[]{
    return items.reduce((a,v)=>[...a, mapFunc(v)],[] as K[])
}


console.log(myMap([1,2,3,4,5,6], (v)=>(v*7).toString()))