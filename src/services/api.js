const API_KEY="3bddb8a2ff68df5c5fc8da1e11796a25";
const BASE_URL="https://api.themoviedb.org";

export const getPopularMovies= async ()=>{
const response = await fetch(`${BASE_URL}/3/movie/popular?api_key=${API_KEY}`)
const data = await response.json()
return data.results
}

export const searchMovies= async (query)=>{
const response = await fetch(`${BASE_URL}search/movie?api_key${API_KEY}&query=${encodeURIComponent(
    query
)}`)
const data = await response.json()
return data.results
}