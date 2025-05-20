import Header from "./Header";
import { useState } from "react";

const Login = () => {
   const [isSignInForm, setIsSignInForm] = useState(true);
   
   const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
   }
   return (

      <div>
         <Header />
         <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_large.jpg" alt="logo" />
         </div>
         <form className="absolute flex  flex-col w-3/12 my-36 mx-auto right-0 left-0   p-12  text-white rounded-lg bg-black/80">
            <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder="Full name" className="p-4 my-2 w-full bg-gray-700 text-gray-100" />}
            <input type="text" placeholder="Email or phone number" className="p-4 my-2 w-full bg-gray-700 text-gray-100" />
            <input type="password" placeholder="Password" className="p-4 my-2 w-full bg-gray-700 text-gray-100 " />
            <button type="submit" className="py-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer">{isSignInForm ? "Sign In" : "Sign Up"}</button>
         
            <p onClick={toggleSignInForm}>{isSignInForm? "New to Netflix?Sign up now." :" Already registered? Sign In"}</p>
         </form>
      </div>


   )
}
export default Login;