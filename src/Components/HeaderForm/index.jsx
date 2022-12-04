import Logo from "../../assets/img/Logo.png"
import "./headerform.css"
import { Contex } from "../../Contex"
import { useContext } from "react"
import { useState, useEffect } from "react"  

export const HeaderForm = () => {
  const cont = useContext(Contex)
  const [name, setName] = useState("muhammadali0666")
  const [input, setInput] = useState(null)

  // useEffect(() => {
  //   async function handleSearch() {
  //     const data = await fetch(`https://api.github.com/search/users?q=${name}`)
      
  // },[])
 console.log(input
  );
  
  return (
    <>
      <img className="text-light me-3" src={Logo} alt="logo" width={50} height={50}/>
      <form className="header-form">
        <input onChange={(e) => setInput(e.current.value)}  type="text" className="header-input px-3 py-2 rounded-2" placeholder="Search or jupm to..."/>
        <button className="header-btn px-2 rounded-2">
          /
        </button>
      </form>
    </>
  )
}