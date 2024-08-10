import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import  { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUsers, removeUsers} from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const gptSearchVi = useSelector(store => store.GptSearch.gptSearchView);
  const auth = getAuth();
  const navigate = useNavigate();
 
  const ToggleGptSearchView = () =>{
    dispatch(toggleGptSearchView(!gptSearchVi))
  }


  const HandleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
              })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName ,photoURL} = user;
        dispatch(addUsers({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL}));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        navigate("/");
        dispatch(removeUsers());
      }
    });
    return () => Unsubscribe; 
  }, []);

  return (
    <>
    <div className="absolute sm:flex justify-between items-center w-full z-20 ">
      <img
        className="sm:w-40 w-32 "
        src={LOGO}
        alt="Netflix Logo"
      />
      {user && (
      <div className="flex items-center">
        <button className="text-white sm:p-2 p-1 bg-slate-700 rounded sm:relative relative md:top-2  -right-80 md:right-10" onClick={ToggleGptSearchView}>GptSearch</button>
        <img
          className="w-10 h-10 rounded-full sm:relative md:top-2 md:right-8 top-2 absolute right-24"
          alt="User Avatar"
          src={user.photoURL}
        />
        <button
          className="mr-2 bg-red-600 p-1 text-white rounded sm:relative sm:top-1 absolute top-3 right-5"
          onClick={HandleSignout}>
          Sign out
        </button>
      </div>
      )}
    </div>
    </>
  );
};

export default Header;
