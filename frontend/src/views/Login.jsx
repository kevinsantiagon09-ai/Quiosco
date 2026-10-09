import { Link } from "react-router-dom";

export default function Login() {
  return (
       <>
      <h1 className="text-4xl font-black">Iniciar sesion</h1>
      <p>Para crear un pedido debes iniciar sesion</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">   
        <form>

      <div className="mb-4">
        <label
           className="text-slate-800"
           htmlFor="email"
            >Email</label>
           <input
              type="email"
              id="email" 
              className="mt-2 w-full p-3 bg-gray-50"
              name="email"
              placeholder="Tu email"
           />
      </div>
       
       <div className="mb-4">
        <label
           className="text-slate-800"
           htmlFor="password"
            >password</label>
           <input
              type="password"
              id="password" 
              className="mt-2 w-full p-3 bg-gray-50"
              name="password"
              placeholder="Tu Password"
           />
      </div>

      <input
          type="submit"
          value="Iniciar sesion"
          className="bg-indigo-600 hover:bg-indigo-800 transition-colors cursor-pointer w-full p-3 text-white uppercase font-bold"
      />
    </form>
  </div>
   <nav className="mT-05">      
    <Link to="/auth/registro">
       ¿No tienes cuenta? Crea una 
       </Link>
   </nav>
  </>
  )
}
