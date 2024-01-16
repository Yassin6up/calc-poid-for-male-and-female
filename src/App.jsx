import { useState } from 'react'
import './App.css'
import female from "./assets/female.png"
import male from "./assets/male.png"


function App() {

const [img , setImg] = useState('')
const [target , setTarget] = useState("")
const [idealPoid , setPoid] = useState("")
const [hight , setHight] = useState("")


const handelClick = ()=>{


  if(isNaN(hight)){
    alert('invalid number')
  }else if(hight < 150){
    alert("invalid hight your hight is <150cm")
  }else{
    if(target === "female"){
      const result = hight - 100 
      setPoid(result)
    }else{
      const result2 = hight - 100 
      setPoid(result2)
    }
  }
  }



const handelChange = (e)=>{
  if(e.target.value === "male" ){
    setTarget("male")
    setImg(male)
  }else if(e.target.value === "female"){
    setImg(female)
    setTarget("female")
  }
}
  return (
    <>
      <form>
      <label> Hight :  </label>
      <input type='text' onChange={(e)=> setHight(e.target.value) }  placeholder='Enter Your High' />
      <div className='flexContainer'>
        <div>
          <label> Select your gender : </label>
          <select onChange={handelChange}>
            <option value="" disabled>Select</option>
            <option value="male" >Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <img className='img' src={img}  alt="img"  />
      </div>
      <label> Wight :  </label>
      <input type='text' placeholder='' value={"Poid Edial est : " + idealPoid + "KG"} disabled />
      <button onClick={handelClick} type='button'>Calculate</button>
      </form>
    </>
  )
}

export default App
