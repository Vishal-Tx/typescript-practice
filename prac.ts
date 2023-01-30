interface MySelf{
     name: string;
    age: number;
}

type MySelfReadOnly = Readonly<MySelf>

const intro = (name: string, age:number):Readonly<MySelf>=>{
    return {
        name,age
    }
}


const vishal = intro("Vishal", 22)

console.log(vishal)
vishal.name = "Harry"
console.log(vishal)

