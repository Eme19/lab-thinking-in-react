

function ProductTable ({productCopy}) {
    
        return (
           
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                    </thead>

                <tbody>
                    {productCopy.map((product) => {
                        return (
                   <tr key={product._id} >
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            </tr>
                        );
                        })}
                    </tbody>
                </table>
               </div>
      
        )
      }
    
      export default ProductTable ;









