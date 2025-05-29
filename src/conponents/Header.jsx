import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";   
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";   

const Header =()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    

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
        <div className="h-20 bg-black flex justify-between">
        <div className="w-full px-8 py-2 bg-gradient-to-b from-black z-10">
            <img 
            className="w-44"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
        </div>
        { user.user && <div className="flex w-2/12 m-2 p-2">
            <img className="rounded-3xl w-12 h-12" src={user?.user?.photoURL} alt="user"/>
            <h1 className="text-white font-bold text-center m-2">{user?.user?.displayName}</h1>
         <button className="font-bold text-center m-2 text-white w-34 bg-red-700 rounded-full" onClick={handleSignOut}>Sign out</button>
        </div> }
        </div>
    );
}
export default Header;