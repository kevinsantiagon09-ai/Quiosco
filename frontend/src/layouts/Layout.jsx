import { Outlet } from "react-router-dom";
import Sibebar from "../components/Sibebar";
import Resumen from "../components/Resumen";


export default function Layout() {
  return (
    <div className="md:flex">
        <Sibebar />


      <main className= "flex-1  h-screen overflow-y-scroll bg-gray-100 p-10">
         <Outlet />
      </main> 

         <Resumen />

    </div>
  )
}
