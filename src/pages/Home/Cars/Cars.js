import React, {useEffect, useState} from 'react';
import Car from "../../../components/Car/Car";
import {Link} from "react-router-dom";
import axios from "axios";
import './cars.scss'

const Cars = () => {

    const [catalog, setCatalog] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/products?_limit=3')
            .then(({data}) => setCatalog(data))
    }, [])

    return (
        <section className="cars">
            <div className="container">
                <h3 className="title">Электромобили в Липецке </h3>
                <div className="cars__row">
                    {catalog.map((item) => (
                        <Car key={item.id} id={item.id} image={item.image} title={item.title} drive={item.drive}
                             reserve={item.reserve} mileage={item.mileage} year={item.year} price={item.price}/>
                    ))}
                </div>
                <Link to="catalog">
                    <button className="btn btn_red">Посмотреть все автомобили</button>
                </Link>
            </div>
        </section>
    );
};

export default Cars;