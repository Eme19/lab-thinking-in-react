

function SearchBar (searchHandler, filterProduct, productInStock ) {
    
    
    
    
    // // const handleChange = (e) => {
    // //     e.preventDefault();
    // //     searchBarItem(e.target.value);
    // // };
    
    // if (searchBarItem.length > 0) {
    //     searchBarItem.filter((product) => {
    //         return product.name.match(searchBarItem);
    //     });
    // }

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