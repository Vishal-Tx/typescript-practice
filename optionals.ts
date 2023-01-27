const printIngredients = (quantity:string, Ingredient:string, extra?:string)=>{
console.log(`${quantity} ${Ingredient} ${extra?`${extra}`:""}`);
}

printIngredients("120","basil")
printIngredients("1mg","sugar", "Optional")

interface User{
    name:string,
    info?:{
        email?:string
    }
}



function findEmail(user:User):string{
    if(user.info){
        return user.info.email as string;
    } 
    return ""
}
// or
function findEmailnew(user:User):string{
    if(user.info){
        return user.info.email!;
    } 
    return ""
}
// or
function findEmailEasy(user:User):string{
    if(user.info){
        return user?.info?.email ?? "";
    } 
    return ""
}

console.log(findEmail({name:"vishal Gupta", info:{email:"vishal"}}))
console.log(findEmailnew({name:"vishal Gupta", info:{email:"vishal"}}))

console.log(findEmailEasy({name:"vishal Gupta", info:{email:"vishal"}}))

// optional Callbacks

function addWithCallback(x:number, y:number, callback?:()=>void){
    console.log([x,y]);
    callback?.()
}

addWithCallback(2,3,()=>console.log("yolo"))