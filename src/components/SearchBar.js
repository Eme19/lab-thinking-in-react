

function SearchBar ({searchHandler, filterProduct, productInStock}) {
    
    
    

    return (
        <div>
            <h2>Search</h2>
            <form>
            <input
           type="text"
           placeholder="Search items here"
          onChange={(e) => searchHandler ()}
          value={searchHandler} />

          <div>
            <input type="checkbox" onChange={(e) => filterProduct()}
             checked={productInStock}/> 
            
          </div>
          </form>
        </div>

    );
    
}
    
      export default SearchBar ;