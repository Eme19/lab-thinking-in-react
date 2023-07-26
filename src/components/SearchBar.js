

function SearchBar ({searchHandler, filterProduct, productInStock}) {
    
    
    

    return (
        <div>
            <h2>Search</h2>
            <form>
            <input
           type="text"
           placeholder="Search items here"
          onChange={(e) => searchHandler (e)}
        
         />

          <div>
            <input type="checkbox" onChange={(e) => filterProduct(e.target.checked)}
             checked={productInStock}/> 
            
          </div>
          </form>
        </div>

    );
    
}
    
      export default SearchBar ;