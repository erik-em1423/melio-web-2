import { Nav, Navbar, Button, Modal, Badge } from 'react-bootstrap'

import {useState, useEffect} from 'react'

import RShoppingCart from '../RShoppingCartComponent/RShoppingCart'

import { Bag } from 'react-bootstrap-icons';

function RNavBar(props)
{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [sumCount, setSumCount] = useState(0);

    function calculateSumCount()
    {
        if (props.shopping_cart !== undefined && props.shopping_cart.length > 0) {
            var currentCount = 0;
            props.shopping_cart.forEach((e) => {
                currentCount = currentCount + e.count;
            })
            setSumCount(currentCount);
        }
    }

    useEffect(() => {
            calculateSumCount();
    });

    function onCartItemCountChanged()
    {
        calculateSumCount();
    }
    
    return(
        <>
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                            <Nav.Link onClick={handleShow}><Bag /></Nav.Link>
                            <Badge variant="light">{sumCount}</Badge>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
            <Modal show={show} onHide={handleClose}>

                <Modal.Body>
                    <RShoppingCart shopping_cart={props.shopping_cart} add_to_cart={props.add_to_cart}
                    remove_one_from_cart={props.remove_one_from_cart}
                    onCartItemCountChanged={onCartItemCountChanged} ></RShoppingCart>
                    {sumCount}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        
        </>
        
    )
}
export default RNavBar;