import React, {useEffect} from 'react';
import Layout from "./Layout/Layout";
import {Routes, Route} from "react-router-dom";
import Catalog from "./pages/Catalog/Catalog";
import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";
import Questions from "./pages/Questions/Questions";
import Map from "./pages/Map/Map";
import Product from "./pages/Product/Product";

const App = () => {

    return (
        <>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route path="" element={<Home/>}/>
                  <Route path="catalog" element={<Catalog/>}/>
                  <Route path="map" element={<Map/>}/>
                  <Route path="questions" element={<Questions/>}/>
                  <Route path="info" element={<Info/>}/>
                  <Route path="product/:id" element={<Product/>}/>
              </Route>
          </Routes>
        </>
    );
};

export default App;