
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import testUtils from 'react-dom/test-utils';


function RCard(props) {
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.product.name}</Card.Title>
                    <Card.Text>
                        {props.product.description}
    </Card.Text>
                    <Card.Text >{props.product.price} €</Card.Text>
                <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
    );
}

export default RCard;
