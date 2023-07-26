

function SearchBar ({searchHandler, filterProduct, productInStock}) {
    
    
    

    return (
        <div>
            <h2 className="mb-20">Search</h2>
            <form>
            <input
           type="text"
           placeholder="Search product here"
          onChange={(e) => searchHandler (e)}
        />

          <div>
            <input className='checkbox-style' type="checkbox" 
            placeholder="Only show products in stock"
            onChange={(e) => filterProduct(e.target.checked)}
             checked={productInStock}/> 
            
          </div>
          </form>
        </div>

    );
    
}
    
      export default SearchBar ;