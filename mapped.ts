type myDogInfo = {
    name:string
} & Record<string, string>

// we can do above without Record

type MyDogInfoWithourRecord = {
    name:string;
    [key :string]:string|number;
}

const myDog:MyDogInfoWithourRecord = {
    name:"Bruno",
    age:48
}

// Mapped Types

interface dogInfo{
    name:string;
    age:number;
}

type optionsFlags<Type> ={
    [property in keyof Type]:boolean
}

type dogOptions = optionsFlags<dogInfo>

type Listeners<Type> = {
    [property in keyof Type as `on${Capitalize<string & property>}Change`]?:(newValue:Type[property])=>void;
}&  {
    [property in keyof Type as `on${Capitalize<string & property>}Delete`]?:()=>void;
}

const listenToObject = <T>(obj:T, listeners:Listeners<T>):void=>{
    throw "Listen"

}

const lg:dogInfo = {
    name: "LG",
    age:12
}

type DofInfoListener = Listeners<dogInfo>


listenToObject(lg,{
    onNameChange:(v:string) => {},
    onAgeChange:(v:number) => {},})
