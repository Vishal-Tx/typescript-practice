import { useCallback, useReducer } from "react";

interface Todos{
    id:number;
    text:string;
    done:boolean
}

type ActionType = |{type:"ADD", text:string} | {type:"remove",id:number}

export const useTodo = (initialTodos:Todos[]):{todos:Todos[], addTodo:(text:string)=>void, removeTodo:(id:number)=>void}=>{
const [todos, dispatch] = useReducer((state:Todos[], action:ActionType)=>{
    switch(action.type){
    case "ADD": return[...state,{
        id:state.length,
        text:action.text,
        done:false
      }]
    case "remove":return state.filter(({id})=>id!==action.id)
    default: throw new Error("Something is wrong")
}
},initialTodos)

const addTodo = useCallback((text:string)=>{
dispatch({type:"ADD", text})},[])

const removeTodo = useCallback((id:number)=>{
dispatch({type:"remove", id})
},[])

return {todos,addTodo,removeTodo}
}