import React from 'react';
import { useSelector } from 'react-redux';

const Results = () => {
    const results = useSelector(store => store.GptSearch.results || []);
    
    return (
        <>
            <div className=''></div>
            <div className="bg-black z-10 bg-opacity-65 ">
                {results.map((result, index) => (
                   <>  
                    <img
        className='-z-10 absolute'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="Background"
      />
                   <h1 className='text-3xl text-white ml-5 font-bold'>{result.results[0].original_title}</h1>
                    <div key={index} className='flex overflow-x-scroll no-scrollbar mt-7 mb-12 ml-5'>
                        {result.results.map((element, subIndex) => (
                          element.poster_path &&
                            <div className="w-60 flex-shrink-0" key={subIndex}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w780${element.poster_path}`}
                                    alt={element.title}
                                    className='w-48 rounded-lg'
                                />
                            )
                            </div>
                        ))}
                    </div>
                </>
                ))}
            </div>
        </>
    );
};

export default Results;
