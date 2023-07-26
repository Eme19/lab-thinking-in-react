 import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { useState } from 'react';
import jsonData from '../data.json';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [productInStock, setProductInStock] = useState(false);

const searchHandler = (e) => {
    const allProduct = jsonData.filter((items) => {
        return items.name.toLowerCase().includes(e.target.value.toLowerCase());
});
setProducts(allProduct)

}



const filterProduct = (check) => {
    setProductInStock(check)
    const currentProduct = [...products]
    
    if (productInStock === true) {
       currentProduct.filter((items)=> {
        return items.productInStock 
    
       }
       )
       console.log(currentProduct)
    } else {
       console.log('not filtered!')
    }

   setProducts(currentProduct)
    console.log(productInStock)
}
 

  return(
      <div>
        
        <h1>IronStore</h1>
        <SearchBar searchHandler={searchHandler} filterProduct={filterProduct} productInStock={productInStock}/>
        <ProductTable products={products}/>
      </div>    
  )
}

export default ProductsPage ;