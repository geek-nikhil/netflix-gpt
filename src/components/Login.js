import React, { useRef, useState } from 'react';
import Header from './Header';
import checkValidate from '../utils/validate';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUsers } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(null);
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const validate = async (e) => {
    e.preventDefault();
    const name = nameRef.current?.value || '';
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const validationError = checkValidate(email, password);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);

    try {
      if (!isSignInForm) {
        // Sign-up logic
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await updateProfile(user, {
          displayName: name,
          photoURL: "https://avatars.githubusercontent.com/u/126591020?v=4"
        });

        const { uid, email: userEmail, displayName, photoURL } = auth.currentUser;
        dispatch(addUsers({ uid, email: userEmail, displayName, photoURL }));
        console.log('User signed up:', user);
        navigate("/browse");
      } else {
        // Sign-in logic
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log('User signed in:', user);
        navigate("/browse");
      }
    } catch (error) {
      setError(`${error.code} - ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <img 
        className="inset-0 w-full h-full object-cover opacity-50" 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="Background"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <form className="bg-black bg-opacity-75 p-8 rounded-lg shadow-md space-y-6 w-80" onSubmit={validate}>
          <h2 className="text-2xl font-bold text-white mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
          {!isSignInForm && (
            <input 
              ref={nameRef}
              type="text" 
              placeholder="Name" 
              className="p-3 w-full border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-500"
              id="name"
            />
          )}
          <input 
            ref={emailRef}
            type="email" 
            placeholder="Email Address" 
            className="p-3 w-full border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-500"
            id="email"
          />
          <input 
            ref={passwordRef}
            type="password" 
            placeholder="Password" 
            className="p-3 w-full border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-500"
            id="password"
          />
          {error && <p className='text-red-700 font-bold text-lg'>{error}</p>}
          <button 
            type="submit" 
            className="w-full bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-gray-50 text-center cursor-pointer" onClick={toggleSignUpForm}>
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already have an account?"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
