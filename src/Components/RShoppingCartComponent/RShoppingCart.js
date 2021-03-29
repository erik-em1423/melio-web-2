import { Modal, Button } from 'react-bootstrap'

function RShoppingCart(props) 
{
    return(
        <div>
            <ul>
                {
                props.shopping_cart.map(e =>  (
                    <li>{e.product.name} : Count: {e.count}</li>
                ))
                }
            </ul>
        </div>
        // data.map(el => (
        //     <div><RCard product={el} add_to_cart={add_to_cart} /></div>
        // ))
    )
}
export default RShoppingCart;