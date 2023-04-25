import React from 'react';
import {Link} from 'react-router-dom'
import Vector from '../../assets/vectors/Vector.png';
import Vector1 from '../../assets/vectors/Vector (1).png';
import Vector2 from '../../assets/vectors/Vector (2).png';
import Vector3 from '../../assets/vectors/Vector (3).png';
import Vector4 from '../../assets/vectors/Vector (4).png';

const Car = ({ id, image, title, drive, mileage, reserve, price, year}) => {
    return (
        <div className="car">
            <img src={image} alt={title}/>
            <div className="car__text">
                <h4 className="car__title">{title}</h4>
                <div className="car__info">
                    <ul className="car__left">
                        <li className="car__left-item">
                            <img src={Vector} alt="" className="car-left-img"/>
                            Привод</li>
                        <li className="car__left-item">
                            <img src={Vector1} alt="" className="car-left-img"/>
                            Запас хода</li>
                        <li className="car__left-item">
                            <img src={Vector2} alt="" className="car-left-img"/>
                            Пробег</li>
                        <li className="car__left-item"><img src={Vector3} alt="" className="car-left-img"/>
                            Год выпуска</li>
                        <li className="car__left-item"><img src={Vector4} alt="" className="car-left-img"/>
                            Цена</li>
                    </ul>
                    <ul className="car__right">
                        <li className="car__right-item">{drive}</li>
                        <li className="car__right-item">{
                            reserve === 350 || reserve === 85 || reserve === 130 ?
                                `${reserve} км + ДВС` :
                                `${reserve} км`
                        }</li>
                        <li className="car__right-item">{mileage} миль</li>
                        <li className="car__right-item">{year}</li>
                        <li className="car__right-item">{price} $</li>
                    </ul>
                </div>
                <Link to={`/product/${id}`}>
                    <button style={{marginTop: "32px"}} className="btn btn_green btn_test">Подробнее</button>
                </Link>
            </div>
        </div>
    );
};

export default Car;