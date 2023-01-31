import React, { PropsWithChildren, useCallback } from 'react'
import "./App.css"

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

const App = () => {
  const onListClick = useCallback((item:string)=>{
    alert(item)
  },[])
  return (
    <div><Heading title = "Hello"/>
    <Box>Hello there</Box>
    <List items={["1","2","3"]} onClick={onListClick}/></div>
    
  )
}

export default App