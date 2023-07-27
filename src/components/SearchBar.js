import './SearchBar.css'

function SearchBar ({searchHandler, filterProduct, productInStock}) {
    
    
    

    return (
        <div>
            <h2>Search</h2>
            <form>
            <input
           type="text"
          //  placeholder="Search product here"
          onChange={(e) => searchHandler (e)}
        />

          <div className='checkboxx'>
            <label className='label-style'> 
            <input className="checkbox-style" type="checkbox" 
            onChange={(e) => filterProduct(e.target.checked)}
             checked={productInStock}/> 
            Only show products in stock</label>
          </div>
          </form>
        </div>

    );
    
}
    
      export default SearchBar ;