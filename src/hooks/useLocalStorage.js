import { useState,useEffect } from "react";
//useState-store value
//useEffect =sync changes with local storage

//// Custom hook (Function)to use localStorage with React state
const useLocalStorage=(key,initialValue)=>{
    //key=the name you want to store the data /name used in localStorage (like "tasks")
    // initialValue = default value if nothing is saved yet

    // Step 1: Set up React state
    const[value,setValue]=useState(()=>{
        // Try to read from localStorage
        const stored=localStorage.getItem(key);//localStorage.getItem(key) tries to read saved data (as a string)
        if(stored !==null){
            // If found, parse the JSON and use it
            return JSON.parse(stored);//JSON.parse(...) converts it back into a usable array/object
        }
        // If not found, use the initial value
        return initialValue;//If nothing is saved, it falls back to your initialValue
    });
    // Step 2: Save to localStorage whenever value changes
    useEffect(()=>{
        // Convert value to a string and store it
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value]);// Runs this effect whenever key or value changes

    //Step 3: Return value and the function to change it
    return [value, setValue];
}
export default useLocalStorage;