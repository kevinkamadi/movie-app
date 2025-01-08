import { useContext, useEffect, useState, createContext } from "react";

const MovieContext = createContext()
export const  useMovieContext = ()=>useContext(MovieContext)
export const movieProvider= ({children})=>{      //provides state to any of the component wrapped around it
   
   const [favorites, setFavorites] = useState([])

   useEffect(()=>{},[])
    const storedFavs= localStorage.getItem("favorites")
    if(storedFavs)setFavorites(JSON.parse(storedFavs))


    useEffect(()=>{
        localStorage.setItem("favorites", JSON.stringify(favorites))
    },[favorites])

    const addToFavorites= (movie)=>{
        setFavorites(prev=> [...prev, movie]) //updating state in react when wanting to add value to an aRRAY
    }

    const removeFromFavorites=(movieId)=>{
     setFavorites(prev=>[prev.filter(movie=>movie.Id !== movieId)])
    }
   return <MovieContext.Provider>
    {children}
   < MovieContext.Provider/>
}     