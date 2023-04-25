import React, {useEffect, useState} from 'react';
import Car from "../../components/Car/Car";
import axios from "axios";
import {Link} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase";

const Catalog = () => {
    const [catalog, setCatalog] = useState([])

    useEffect(() => {
        getDocs(collection(db, "products"))
            .then((res) => setCatalog(res.docs.map(el => ({...el.data(), id:el.id}))))
    }, [])

    return (
        <section className="cars">
            <div className="container">
                <h3 className="title">Электромобили в Липецке </h3>
                <div className="cars__row">
                    {catalog.map((item) => (
                        <Car key={item.id} id={item.id} image={item.image} title={item.title} drive={item.drive} reserve={item.reserve} mileage={item.mileage} year={item.year} price={item.price}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Catalog;