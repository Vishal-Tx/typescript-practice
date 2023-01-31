import React from 'react'
import "./App.css"

const Heading = ({title}:{title:string})=>{
  return <h1>{title}</h1>
}

const Box = ({children}:{children:React.ReactNode})=>{
return <div style={{color:"brown"}}>{children}</div>
}

const App = () => {
  return (
    <div><Heading title = "Hello"/>
    <Box>Hello there</Box></div>
    
  )
}

export default App