import React, { useState } from 'react';
import openai from "../utils/openai"
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from 'react-redux';
import { addResults } from '../utils/gptSlice';
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyCOjbZaCATh9y8Ekz9yN9JpV8KiRlDr9fI");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const GptSearchBar = () => {
  const [query, setQuery] = useState('');



  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
   const dispatch = useDispatch();
  const getSearch = async (quer) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${quer}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const json = await response.json();
      return json;
    } catch (error ) {
      console.error("Error fetching now playing movies:", error);
    }
  };
  
  


  const handleSearch = async () => {
    const run = async () => {
      try {
        const prompt = `
          Act as a movie recommendation system and suggest some movies for the query: ${query}.
          Only give me the names of 5 movies, comma separated.
          The result should always look like - Spider Man, Elemental, Phir Hera Pheri.
        `;
        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        const arr = text.split(',').map(movie => movie.trim()); // Trim whitespace around movie names
        
        console.log(arr); // Log the array for debugging
  
        const moviePromises = arr.map(element => getSearch(element)); // Create an array of Promises
        const movieResults = await Promise.all(moviePromises); // Wait for all Promises to resolve
        
        dispatch(addResults(movieResults)); // Dispatch the resolved results
      } catch (error) {
        console.error("Error during movie recommendation handling:", error);
      }
    };
  
    run(); // Execute the run function
  };
  
  return (
    <div className='flex  justify-center top-11 pt-20'>
      <div className='p-4 bg-black rounded-2xl w-11/12 bg-opacity-30 mb-11'>
        <input
          type="text"
          placeholder="Search for a movie"
          value={query}
          onChange={handleInputChange}
          className='border p-3 w-9/12 rounded-2xl ml-32 mr-6 font-sans font-bold text-lg'
        />
        <button onClick={handleSearch} className='bg-blue-500 text-white p-2 rounded-2xl py-4 hover:bg-slate-300 hover:text-violet-950'>
          Search
        </button>
      </div>
    </div>
  );
}

export default GptSearchBar;
