interface MyUser{
    name: string;
    id:number;
    email?:string;
    phone?:number;
}

type MyUserOptionals=Partial<MyUser>;

type ReqMyUser = Required<MyUser>

type justEmailandNam = Pick<MyUser,"email"|"name">
// interface MyUserOptionals{
//     name?: string;
//     id?:string;
//     email?:string;
// }

const merge = (user:MyUser, overrides:MyUserOptionals):MyUser=>{
return {
    ...user,
    ...overrides
}
}

console.log(merge({id:1,name:"Jack",email:"Hello@123"},{id:2,email:"HelloBuddy@123"}))

const mapById = (users:MyUser[]):Record<string, MyUser>=>{
return users.reduce((a,v)=> ({...a,[v.id]:v}),{})
}

console.log(mapById([{id:1,name:"Jack",email:"Hello@123"},{id:2,email:"HelloBuddy@", name:"Yamulack"}]))

type userWithoutID = Omit<MyUser, "id">

const mapByIdOmit = (users:MyUser[]):Record<MyUser["id"], userWithoutID>=>{
    return users.reduce((a,v)=> {const {id, ...other} = v;
    return {...a,[id]:other}},{})
    }
console.log(mapByIdOmit([{id:1,name:"Jack",email:"Hello@123"},{id:2,email:"HelloBuddy@", name:"Yamulack"}]))
