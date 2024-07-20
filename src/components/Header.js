import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector(store => store.user);
  const auth = getAuth();
  const navigate = useNavigate();
  const HandleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/browse");
      });
  };
  return (
    <div className="absolute flex justify-between items-center w-full px-8 py-2 bg-black">
      <img
        className="w-40 bg-gradient-to-b from-black p-2"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
