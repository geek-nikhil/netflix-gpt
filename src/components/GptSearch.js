import React from 'react';
import GptSearchBar from './GptSearchBar';
import Results from './Results';

const GptSearch = () => {
  return (
    <div className='relative h-screen z-10'>
         <img
        className='absolute inset-0 -z-10 w-full h-full object-cover'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="Background"
      />
      <GptSearchBar />
      <Results />
    </div>
  );
}

export default GptSearch;
