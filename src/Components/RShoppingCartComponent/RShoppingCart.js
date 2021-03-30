import { Modal, Button } from 'react-bootstrap';
import RShoppingCartItem from '../ShoppingCartItemComponent/ShoppingCartItem';
function RShoppingCart(props) 
{
    return(
        <div>
            <ul>
                {
                props.shopping_cart.map(e =>  (
                    <RShoppingCartItem add_to_cart={props.add_to_cart}
                    product_with_count={e} 
                    remove_one_from_cart={props.remove_one_from_cart}
                        onCartItemCountChanged={props.onCartItemCountChanged}
                    ></RShoppingCartItem>
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