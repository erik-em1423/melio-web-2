import { Nav, Navbar, Button, Modal } from 'react-bootstrap'

import {useState} from 'react'

import RShoppingCart from '../RShoppingCartComponent/RShoppingCart'

function RNavBar(props)
{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={handleShow}>Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
            <Modal show={show} onHide={handleClose}>

                <Modal.Body>
                    <RShoppingCart shopping_cart={props.shopping_cart}></RShoppingCart>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        
        </>
        
    )
}
export default RNavBar;