import MovieCard from "../MovieCard.js"
import {useState, useEffect} from "react"
import { searchMovies, getPopularMovies } from "../../services/api.js"

function Home(){

    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies]=useState([])
    const[error, setError]=useState(null);
    const[loading, setLoading]=useState(true)

    useEffect(()=>{
    const loadingPopularMovies= async()=>{
        try{
            const popularMovies= await getPopularMovies()
            setMovies(popularMovies)
        }catch(err){
        console.log(err)
        setError('Failed to Load.....')
        }
        finally{
            setLoading(false)
        }
    }

    loadingPopularMovies()

    }, [])


    const FormSubmission= async (e)=>{
        e.preventDefault()
       if(!searchQuery.trim()) return
       if(loading) return

       setLoading(true)
       try{
      const searchResults =await searchMovies(searchQuery)
       setMovies(searchResults)
       setError(null)
       }
       catch(err){
        console.log(err)
       setError("Failed to search Movies...")
       }
       finally{
         setLoading(false)
       }

    }
  
    return(
         <div className="home" >
       
            <form onSubmit={FormSubmission} className="search-form">
                <input 
                type="text" 
                placeholder="search for movies here"  
                className="search-input"
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                />
                <button 
                type="submit" 
                className="search-button"
                >Search</button>
            </form>
 
            {error && <div className ="error-message">{error}</div>}


            {loading ? 
            <div className="loading"> Loading ...</div> : 
            <div className= "movies-grid">
                {movies.map((movie)=>
                    // movie.title.toLowerCase().startsWith(searchQuery) && 
                    (<MovieCard movie={movie} key={movie.id}/>      
                    ))}
            </div>}
          
         </div>  
    )
}

export default Home