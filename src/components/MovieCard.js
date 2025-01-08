

function MovieCard({movie}){
                             


    function onImageClick(){
 alert("clicked")
    }


    return(<div className="movie-card">
            <div className="movie-poster">
                <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                    <div className="movie-overlay"> 
                        <button className="favorite-btn" onClick={onImageClick}> 
                            🤍  
                        </button>
                    </div>
                {/* </img> */}
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default  MovieCard