


function Favorites(){



    const handleFavSubmission=(e)=>
    {
        e.preventDefault()
        alert("Favorite added")
    }


    return(
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start adding your favorite movies...</p>
            <form onSubmit={handleFavSubmission} className="favorite-form" >
                <input 
                text='favorites here'
                placeholder="Add favorites"
                className="search-inputs">
                </input>
            </form>
        </div>
    )
}

export default Favorites