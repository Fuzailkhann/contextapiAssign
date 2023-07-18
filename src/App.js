import "./styles.css";
import {useEffect, useState} from "react"
import myContext from "./mycontext.js"

import Card from "./Card"
export default function App() {

  const [ counter , setCounter] = useState(0)
  const [ addressData , setAddressData] = useState()
  const handleCounter = () =>{
    setCounter(prev => prev +1)

  }

  useEffect(()=>{
    async function getData(){
      const data = await fetch(`https://random-data-api.com/api/address/random_address?size=${counter}`)
      const json = await data.json();
      setAddressData(json)
      console.log(json)


    }
    getData()

  }, [ counter])
  return (
    <myContext.Provider  value ={ {addressData}}>
     <div className="App">
      <button  onClick ={ handleCounter} >Click</button>
      <p>{counter}</p>
      <div>
        <Card/>
        </div>
     
     </div>
    </myContext.Provider>
  );
}
