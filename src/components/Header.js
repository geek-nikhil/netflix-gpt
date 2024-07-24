import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import  { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUsers, removeUsers} from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const auth = getAuth();
  const navigate = useNavigate();
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
    <div className="absolute flex justify-between items-center w-full px-8 py-2 bg-transparent z-10">
      <img
        className="w-40 p-2"
        src={LOGO}
        alt="Netflix Logo"
      />
      {user && (
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full"
          alt="User Avatar"
          src={user.photoURL}
        />
        <button
          className="ml-4 px-4 py-2 bg-red-600 text-white rounded"
          onClick={HandleSignout}>
          Sign out
        </button>
      </div>
      )}
    </div>
  );
};

export default Header;
