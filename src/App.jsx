import { useState } from 'react'
import './App.css'

function App() {

  // js code
const clor=(value)=>{
const data=value
document.body.style.backgroundColor=data
}
  return (
    // jsx code
    <>
     <div>
        <h1 className='text-center mt-5 '>CHANGE COLOUR</h1>
       <div className='innerdiv'>
          <button onClick={()=>clor(" rgb(237, 51, 51)")} className='m-5  button1'>RED</button>
          <button onClick={()=>clor(" rgb(3, 64, 250)")} className='m-5  button2' >BLUE</button>
          <button onClick={()=>clor("rgb(12, 197, 12)")} className='m-5  button3'>GREEN</button>
          <button onClick={()=>clor(" rgb(255, 255, 255)")} className='m-5  button4'>WHITE</button>
          <button onClick={()=>clor(" rgb(249, 249, 24)")} className='m-5  button5'>YELLOW</button>

       </div> </div>
    </>
  )
}

export default App
