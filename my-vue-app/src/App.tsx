import React, { PropsWithChildren, useCallback, useEffect, useReducer, useState } from 'react'
import "./App.css"
import axios from 'axios'

const Heading = ({title}:{title:string})=>{
  return <h1>{title}</h1>
}

const Box:React.FC<PropsWithChildren>= ({children})=>{
return <div style={{color:"brown"}}>{children}</div>
}

const List:React.FC<{items:string[],onClick?:(item:string)=>void}>= ({items, onClick})=>(
  <ul>
    {
      items.map((item,index)=><li key={index} onClick={()=>onClick?.(item)}>{item}</li>
      )
    }
  </ul>
)
interface Payload{
  text:string;
}

interface Todo{
  id:number;
  done:boolean;
  text:string;
}
type ActionType = |{type:"ADD",text:string} | {type:"remove",id:number}
const App = () => {
  const [payload, setPayload] = useState<Payload | null>(null)

  useEffect(() => {
    axios.get("/data.json").then(({data})=>setPayload(data))
  }, [])
  
  const onListClick = useCallback((item:string)=>{
    alert(item)
  },[])

  const [state, dispatch] = useReducer((todos:Todo[],action:ActionType)=>{
switch(action.type){
  case "ADD": return[...state,{
    id:state.length,
    text:action.text,
    done:false
  }]
  case "remove":return state.filter(({id})=>id!==action.id)
  default: throw new Error("Invalid action type")
}
  },[])
  return (
    <div><Heading title = "Hello"/>
    <Box>Hello there</Box>
    <List items={["1","2","3"]} onClick={onListClick}/>
    <Box>{JSON.stringify(payload)}</Box>
    <Heading title = "Todos"/>
    {todos.map(todo=>( 
      <div key = {todo.id}>
        {todo.text}
        <button onClick={()=>dispatch({type:""})}>remove</button>
      </div>
    ))}
    </div>
  )
}

export default App