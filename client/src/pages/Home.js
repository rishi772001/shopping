import React from 'react';
import Navbar from '../components/Navbar';
import Products from '../components/Products';

function Home(props) {
    return (
        <div>
            <Navbar />
            <br/><br/><br/><br/>
            <h1 style={{textAlign: "center"}}>Products</h1>
            <Products />
        </div>
    );
}

export default Home;