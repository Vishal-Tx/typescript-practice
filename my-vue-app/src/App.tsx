import React, { Children, PropsWithChildren, useCallback, useEffect, useReducer, useRef, useState } from 'react'
import "./App.css"
import axios from 'axios'

type heading={
  title:string
}

const Heading = ({title}:heading)=>{
  return <h1>{title}</h1>
}

const useValue = (initialValue:number)=>useState<number>(initialValue)

type UseNumberValue = ReturnType<typeof useValue>

const Box:React.FC<PropsWithChildren>= ({children})=>{
  return <div style={{color:"brown"}}>{children}</div>
}

const Button:React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>&{title?:string}>=({children,style, title, ...rest})=>(
<button {...rest} style={{...style, backgroundColor:"red"}}>{title ?? children}</button>
)

const List:React.FC<{items:string[],onClick?:(item:string)=>void}>= ({items, onClick})=>(
  <ul>
    {
      items.map((item,index)=><li key={index} onClick={()=>onClick?.(item)}>{item}</li>
      )
    }
  </ul>
)
const IncrementFunc:React.FC<{value:UseNumberValue[0], setvalue:UseNumberValue[1]}> = ({value, setvalue})=>{
  return <>
    <Button onClick={()=>setvalue(value+1)} style={{color:"white"}} title={`Add-${value}`}/>
    </>
  
  }

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
  },[])


  const newTodoRef = useRef<HTMLInputElement>(null);

  const onaddTodo = useCallback(()=>{
    if(newTodoRef.current){
    dispatch({type:"ADD", text:newTodoRef.current.value})
    newTodoRef.current.value = "";}
    else return
    
  },[])


  const [value, setvalue] = useValue(0)

  return (
    <div><Heading title = "Hello"/>
    <Box>Hello there</Box>
    <List items={["1","2","3"]} onClick={onListClick}/>
    <Box>{JSON.stringify(payload)}</Box>
    <Heading title = "Todos"/>
    {todos.map(todo=>( 
      <div key = {todo.id}>
        {todo.text}
        <Button onClick={()=>dispatch({type:"remove", id:todo.id})}>remove</Button>
      </div>
    ))}
    <div>
    <input  type="text" ref={newTodoRef}/>
    <Button onClick={onaddTodo}>Add</Button>
    </div>
    <IncrementFunc value={value} setvalue={setvalue}/>
    </div>
  )
}

export default App