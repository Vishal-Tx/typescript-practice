function addNummbers(a:number,b:number):number{return a+b}

export const addString = (a:string, b:string):string=>`${a}${b}`

export const format = (a:string, b:string|number):string=>`${a}${b}`

export const Printformat = (a:string, b:string|number):void=>console.log(format("he",1))

export const fetchData = (url:string):Promise<String>=>Promise.resolve(`Data from ${url}`)

export const intro = (salutatiion:string, ...names:string[]):string=> `${salutatiion}${names.join(" ")}`

export const getName = (user:{first:string, last:string}):string=>`${user?.first ?? "first"} ${user?.last ?? "last"}`

export default addNummbers