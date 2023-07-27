import React from 'react';
import Table from 'react-bootstrap/Table'

function ProductTable ({products}) {

  
    
        return (
            
            <div>
               
                <Table responsive stripped hover size="xl" className='table-style'>
                    <thead class="thead-light">
                    <tr>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                    </thead>

                <tbody>
                    {products.map((product) => {

                 const boxStyle = {
                 cursor: 'pointer',
                 color: product.inStock ? 'black' : 'red' 
                };

                    return (
               <tr style={boxStyle} key={product.id}   >
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            </tr>
                        );
                        })}
                    </tbody>
                </Table>
               </div>
      
        )
      }
    
      export default ProductTable ;









