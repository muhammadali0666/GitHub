import { Route, Routes } from "react-router-dom"
import { Follower } from "../Pages/Followers"
import { Following } from "../Pages/Following"
import { Overwiev } from "../Pages/Overwiev"
import { Repository } from "../Pages/Repository"

export const RouteWrapper = () => {
  return(
    <>
     <Routes>
        <Route path="/" element={<Overwiev/>}/>
        <Route path="/repository" element={<Repository/>}/>
        <Route path="/follower" element={<Follower/>}/>
        <Route path="/following" element={<Following/>}/>
     </Routes>
    </>
  )
}