 import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { useState } from 'react';
import jsonData from '../data.json';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [productInStock, setProductInStock] = useState(false);

const searchHandler = (e) => {
    const allProduct = products.filter((items) => {
        return items.name.toLowerCase().includes(e.target.value.toLowerCase());
});
setProducts(allProduct)

}



const filterProduct = () => {
    if (productInStock) {
        setProducts(products)
    } else {
        const filterProduct = products.filter((items) => {
            return items.productInStock
        })
   setProducts(filterProduct)
    }
    setProductInStock(!productInStock)
}
  
  return(
      <div>
        
        <h1>IronStore</h1>
        <SearchBar searchhandler={searchHandler} filterProduct={filterProduct} productInStock={productInStock}/>
        <ProductTable products={products}/>
      </div>    
  )
}

export default ProductsPage ;