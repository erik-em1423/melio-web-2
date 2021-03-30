
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ReadData from './read_data.js'

import React, { useState, useEffect, useRef, useReducer } from 'react';
import axios from 'axios';

import RCard from './Components/CardComponent/Card';
import Product from './Model/Product';
import RNavBar from './Components/RNavBarComponent/RNavBar'
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function App() {
  
  const [data, setData] = useState([]);

  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const [shopping_cart, set_shopping_cart] = useState([]);
  
  function add_to_cart(product) {
    // check if product already in cart
    var already_added_product = shopping_cart.filter(e => e.product.name === product.name);

    if(already_added_product.length === 0)
    {
      // new product in cart
      shopping_cart.push({ "product": product, count: 1 });
    }
    else
    {
      // increment amount of product already in cart
      already_added_product[0].count = already_added_product[0].count + 1;
    }
    forceUpdate();
  }

  function remove_one_from_cart(product) {
    var product_in_cart = shopping_cart.filter(e => e.product.name === product.name);
    if(product_in_cart.length === 1)
    {
      product_in_cart[0].count = product_in_cart[0].count - 1;
    }
    forceUpdate();
  }

  useEffect(() => {
    async function fetchData() {
      if (data.length == 0) {
        await axios.get('https://falconx-development.coffee4tech.net/products/public?country=GB')
          .then(function (response) {
            console.log("res-poste");

            console.log("" + response.data.docs);
            var products = ExtractProductList(response.data.docs);
            console.log("products");
            console.log("" + products[0].name);
            // temporarily skipping extractproductlist
            setData( products );
          });
      }
    };
    fetchData();
    
  });
  // that [] empty list is second argument to the useEffect 
  // so the hook doesn't run again when updating component. 
  // if we want to run again, remove the empty list argument

  function ExtractProductList(data) {
    console.log("" + data);
    var products = [];
    if (data.forEach !== undefined) {
      data.forEach(element => {
        let product = new Product();
        product.name = element.name;
        product.price = element.price;
        product.description = element.description;
        //_products.append(product);
        products.push(product);
      });
    }
    return products;


  }

  return (
    <BrowserRouter>
      <div>
        
          <RNavBar shopping_cart={shopping_cart} add_to_cart={add_to_cart}
          remove_one_from_cart={remove_one_from_cart}></RNavBar>
          <Container>
            <Row>
              {
                data.map(el => (
                  <div><RCard product={el} add_to_cart = {add_to_cart}
                  shopping_cart={shopping_cart} /></div>
                ))
              }
            </Row>
          </Container>
      </div>
    </BrowserRouter>

  );
}
export default App;

//{data[0].description}

//{ data[0].name }