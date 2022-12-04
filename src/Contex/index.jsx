import React from "react"
import { useState } from "react"
const Contex = React.createContext() 

function Provider({children}) {
  const [search, setSearch] = useState("")
  return(
    <Contex.Provider value={{search, setSearch}}>
      {children}
    </Contex.Provider>
  )
}
export { Provider, Contex }