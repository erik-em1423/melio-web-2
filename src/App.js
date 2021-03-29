
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ReadData from './read_data.js'

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import RCard from './Components/CardComponent/Card';
import Product from './Model/Product';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {

  const [data, setData] = useState([]);

  var test_list = [1,2,3];


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
        <p>hello!</p>
        <Container>
          <Row>
            {
              data.map(el => (
                <div><RCard product={el} /></div>
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