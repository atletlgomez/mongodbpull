import './App.css';
import React, { useEffect } from "react";
import Axios from 'axios';

export default function App() {
    // will update list as database updates on refreshing the site
    const [list, setList] = React.useState([]);

    // will be run once 
    useEffect(()=> {  
        // here we get the data by requesting data from this link
        // to our nodejs server
        Axios.get('http://localhost:4000/api/products')
        .then((res)=> setList(res.data));
    }, []);

    // creating list of shoes
    let val = list.map((item)=>{
        return <li key={item.id}>{item.price}{item.productName}</li>
    });
    
    return (
        <div>
            <h1>hello world</h1>
            <p>i live in this world</p>
            <ol>
                {val}
            </ol>
        </div>
    )
}

