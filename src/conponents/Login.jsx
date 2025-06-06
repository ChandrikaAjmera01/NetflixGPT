import Header from "./Header";
import { useRef, useState } from "react";

import { checkValidaData } from "../utils/validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGO_URL, USER_AVATAR_URL,BANNER_URL } from "../utils/constant";


const Login = () => {
   const [isSignInForm, setIsSignInForm] = useState(true);
   const [errorMessage, setErrorMessage] = useState("");
   const dispatch = useDispatch();

   const email = useRef(null);
   const password = useRef(null);
   const username = useRef(null);

   const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
   }
   const handleButtonClick = () => {
      // validate form data
      
      console.log(email.current.value);
      console.log(password.current.value);
       let message="";
      if (!isSignInForm) {
         console.log(username.current.value);
          message= checkValidaData(email.current.value,password.current.value, username.current.value, isSignInForm);
      }else{
          message= checkValidaData(email.current.value,password.current.value, null, isSignInForm);
      }
      setErrorMessage(message);
      console.log(message);
      if (message) return;
      
      // Sign in or sign up logic
      if(!isSignInForm)
      {
         // Sign up logic
         console.log("Sign up");
         // Add your sign-up logic here
         // For example, you can send a request to your backend server to create a new user
         createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
               const user = userCredential.user;
               console.log(user);
            
               console.log("User created successfully");
               updateProfile(auth.currentUser, {
                     displayName: username.current.value, 
                     photoURL: USER_AVATAR_URL
                     }).then(() => {
                     // Profile updated!
                     console.log("current user : ", auth.currentUser);
                     console.log("user : ", user);
                     const { uid, email,displayName, photoURL} = auth.currentUser;
                     console.log("photoURL : ", photoURL);
                     dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                    // navigate("/browse");

                     }).catch((error) => {
                      setErrorMessage(error.message);
                     });
               
            })
            .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
               setErrorMessage(errorCode + " : "+ errorMessage);
             
            });
      }else{   
         // Sign in logic
         console.log("Sign in");
         // Add your sign-in logic here
         // For example, you can send a request to your backend server to authenticate the user
         signInWithEmailAndPassword(auth,email.current.value, password.current.value)
            .then((userCredential) => {
               // Signed in 
               const user = userCredential.user;
               console.log(user);
               // navigate to the browse page

             //  navigate("/browse");

            })
            .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
               setErrorMessage(errorCode + " : "+ errorMessage);
            });
      }
     // 
      
   }
   return (

      <div>
         <Header />
         <div className="absolute">
            <img src={BANNER_URL} alt="logo" className="h-screen object-cover md:h-full md:w-full" />
         </div>
         <form onSubmit={(e)=>{e.preventDefault()}}
         className="absolute flex  flex-col w-full md:w-4/12 my-10 md:my-36 mx-auto right-0 left-0  p-4 md:p-12  text-white rounded-lg bg-black/80">
            <h1 className="font-bold text-lg md:text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input  ref={username} type="text" placeholder="Full name" className="p-4 my-2 w-full bg-gray-700 text-gray-100" />}
            <input ref={email} type="text" placeholder="Email or phone number" className="p-4 my-2 w-full bg-gray-700 text-gray-100" />
            <input ref={password} type="password" placeholder="Password" className="p-4 my-2 w-full bg-gray-700 text-gray-100 " />
            <p className="p-2 text-red-500  font-bold text-lg">{errorMessage}</p>
            <button type="submit" className="py-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
         
            <p onClick={toggleSignInForm}>{isSignInForm? "New to Netflix?Sign up now." :" Already registered? Sign In"}</p>
         </form>
      </div>


   )
}
export default Login;