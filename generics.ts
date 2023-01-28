function simpleString<T>(initialState: T):[()=>T, (v:T)=>void]{
    let val:T = initialState;
    return [
        ()=>val,
        (v:T)=>val = v
    ]
}

const [stringgetter, stringsetter] = simpleString("Hello")

console.log(stringgetter())
stringsetter("Yolo")
console.log(stringgetter())

const [str2inggetter, str2ingsetter] = simpleString<null|string>(null)

console.log(str2inggetter())
str2ingsetter("Hello")
console.log(str2inggetter())