const beforeLoad = "beforeLoad";
const Loading = "Loading";
const Loaded = "Loaded";

enum LoadingState{
    beforeLoad = "beforeLoad",
 Loading = "Loading",
 Loaded = "Loaded",
}   





const isLoading = (state:LoadingState):boolean => state===LoadingState.Loading


console.log(isLoading(LoadingState.beforeLoad))


// Literal types


function rolldice(dice:1|2|3):number{
    let pip = 0;
    for(let i = 0; i <dice; i++){
        pip+=Math.floor(Math.random()*5)+1
        console.log(pip)
    }
    return pip

}
console.log(rolldice(3))


function sendEvent1(name:"addToCart", data:{productID:number}):void;
function sendEvent1(name:"checkout", data:{cartCount:number}):void;
function sendEvent1( name:string,data:unknown):void{
    console.log(`${name} ${JSON.stringify(data)}`)
}



sendEvent1("checkout",{cartCount:555})