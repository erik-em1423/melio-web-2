import { Button, ButtonGroup } from 'react-bootstrap';

import {useState} from 'react';

function RShoppingCartItem(props) {
    const [count, setCount] = useState(props.product_with_count.count);
    var onCartItemCountChanged = props.onCartItemCountChanged;
    return (
        <div>
            
            {props.product_with_count.product.name}
            
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={() => {
                    props.remove_one_from_cart(props.product_with_count.product);
                    setCount(props.product_with_count.count);
                    onCartItemCountChanged();
                }}>-</Button>
                <Button variant="secondary">{count}</Button>
                <Button variant="secondary" onClick={() => {
                    props.add_to_cart(props.product_with_count.product);
                    setCount(props.product_with_count.count);
                    onCartItemCountChanged();
                }} >+</Button>
            </ButtonGroup>
        </div>
        // data.map(el => (
        //     <div><RCard product={el} add_to_cart={add_to_cart} /></div>
        // ))
    )
}
export default RShoppingCartItem;

