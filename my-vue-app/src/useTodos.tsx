import { useCallback, useReducer } from "react"

interface Todo{
    id:number;
    done:boolean;
    text:string;
  }
  type ActionType = |{type:"ADD",text:string} | {type:"remove",id:number}

export const useTodos=(initialTodos:Todo[]):{todos:Todo[],addTodo:(text:string)=>void, removeTodo:(id:number)=>void}=>{
    const [todos, dispatch] = useReducer((state:Todo[],action:ActionType)=>{
        switch(action.type){
          case "ADD": return[...state,{
            id:state.length,
            text:action.text,
            done:false
          }]
          case "remove":return state.filter(({id})=>id!==action.id)
          default: throw new Error("Invalid action type")
        }
          },initialTodos)

        const addTodo = useCallback((text:string)=>{
            dispatch({type:"ADD", text})},[])

        const removeTodo = useCallback((id:number)=>{
                dispatch({type:"remove", id})},[])
          return {todos,addTodo,removeTodo}

    

    }