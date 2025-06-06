import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";   
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice"; 
import {toggleGptSearchView} from "../utils/gptSlice"; // Assuming you have a gptSlice defined
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";
import { LOGO_URL } from "../utils/constant"; // Assuming you have a constant file with LOGO_URL defined

 

const Header =()=>{
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const showGptSearchView = useSelector(state => state.gpt.showGptSearchView);
    
    

    const handleSignOut = () => {
     signOut(auth).then(() => {
        
             // Redirect to login page
        navigate("/");
        }).catch((error) => {
            // An error happened.
          console.error("Sign out error:", error);
            navigate("/error");
        });
       
    }

    const handleGPTSearchClick = () => {
        // show and hide the GPT search component
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
       
        dispatch(changeLanguage(e.target.value));
    }

     useEffect(() => {
       const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email,displayName, photoURL} = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
             
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => {
            // Cleanup function if needed
            unsubcribe();
           
        }
    }, [])
    return (
        <div className="h-20 bg-black flex justify-between flex-col  md:flex-row md:justify-between">
        <div className="w-full px-8 py-2 bg-gradient-to-b from-black z-10">
            <img 
            className="w-44 mx-auto md:mx-0"
            src={LOGO_URL} alt="logo"/>
        </div>
        <div className="flex justify-center md:justify-between bg-black md:bg-transparent">
        { user.user && <div className="flex md:w-10/12 w-10/12 m-2 p-2 justify-between">

           {showGptSearchView && <select 
                className="p-2 bg-gray-900 text-white rounded-lg mr-2"
                onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map((lan)=>
                    <option key={lan.identifier} value={lan.identifier}>
                        {lan.name}
                    </option>
                )}
            </select>} 
            <button className="bg-red-700 md:w-48 text-sm w-48 m-2   text-white rounded-full"
            onClick={handleGPTSearchClick}>{showGptSearchView ? "Homepage" : "GPT Search"}</button>
            <img className="hidden md:block rounded-3xl w-10 h-10 md:w-12 md:h-12 mt-3" src={user?.user?.photoURL} alt="user"/>
            <h1 className="text-white  text-sm md:font-bold text-center mt-3 mx-2 md:m-2">{user?.user?.displayName}</h1>
            <button className="md:font-bold text-sm text-center md:m-2 w-40 my-2 text-white md:w-60 bg-red-700 rounded-full" onClick={handleSignOut}>Sign out</button>
        </div> }
        </div>
        </div>
    );
}
export default Header;