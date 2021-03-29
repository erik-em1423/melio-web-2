
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

// function Read() {
//     return axios.get('https://falconx-development.coffee4tech.net/products/public?country=GB')
//     .then(response => response.data);
// }

function ReadData() {
    const [data, setData] = useState({});
    const _products = useRef([]);

    // useEffect(async () => {
    //     await axios.get('https://falconx-development.coffee4tech.net/products/public?country=GB')
    //         .then(function(response) {
    //             setData({data:response.data});
    //             ExtractProductList(response.data);
    //         });
    // });

    

    

    return(
        <>
        </>
    )
}



// {
//     data.hits.map(item => (
//         <li key={item.objectID}>
//             <a href={item.url}>{item.title}</a>
//         </li>
export default ReadData;

