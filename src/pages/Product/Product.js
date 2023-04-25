import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const Product = () => {

    const params = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios(`http://localhost:8080/products/${params.id}`)
            .then(({data}) => setProduct(data))
    }, [])
    console.log(product)
    return (
        <section className="product">
            <div className="container">
                <div className="product__box">
                    <div className="product__content">
                        <div className="product__left">
                            <img className="product__img" src={`.${product.image}`} alt={product.title}/>
                            <div className="product__image-row">
                                {product.images?.map((item) => (
                                    <img key={item.id} src={`.${item.image}`} alt=""/>
                                ))}
                            </div>
                        </div>
                        <div className="product__right">
                            <h3 className="product__title">{product.title}</h3>
                            <div className="product__list-content">
                                <ul className="product__list">
                                    <li className="product__item">Марка</li>
                                    <li className="product__item">Модель</li>
                                    <li className="product__item">Тип кузова</li>
                                    <li className="product__item">Двигатель</li>
                                    <li className="product__item">Мощность</li>
                                    <li className="product__item">Батарея</li>
                                    <li className="product__item">Запас хода(NEDC/EPA/WLTP)</li>
                                    <li className="product__item">Время зарядки(220В/380В/DC)</li>
                                    <li className="product__item">Разгон 0-100 км/ч</li>
                                    <li className="product__item">Максимальная скорость</li>
                                </ul>
                                <ul className="product__list">
                                    <li className="product__itm">{product.mark}</li>
                                    <li className="product__itm">{product.model}</li>
                                    <li className="product__itm">{product.bodytype}</li>
                                    <li className="product__itm">{product.engine}</li>
                                    <li className="product__itm">{product.power}</li>
                                    <li className="product__itm">{product.battery}</li>
                                    <li className="product__itm">{product.reserve}</li>
                                    <li className="product__itm">{product.chargtime}</li>
                                    <li className="product__itm">{product.razgon}</li>
                                    <li className="product__itm">{product.maxskorost}</li>
                                </ul>
                            </div>


                        </div>
                    </div>
                    <div className="product__bottom">
                        <h3 className="product__bottom-name">
                            Описание
                        </h3>
                        <p className="product__bottom-info">
                            TESLA MODEL 3 Mid Range

                            Автомобиль прибыл из Америки, Без пробега по РБ. Машина в отличном состоянии как внешне, внутри, так и технически.<br/> Оригинальный пробег всего 25000км.<br/><br/>

                            Очень динамичный и вместительный электромобиль. Разгон до 100км за 5.6сек. Конец 2018 года, на процессоре Intel. Запас хода в <br/>среднем 420км, зарядка от CHADEMO 1 час 30 минут, зарядка от сети 220 около 9.5часов. Ёмкость Батареи 66kВт. Максимальная <br/> скорость 200км\ч.<br/><br/>

                            Хорошая комплектация: кожаный салон, Подогревы сидений передних, климат контроль, бесключевой доступ, центральный замок,<br/> электро стекла и электро зеркала, складывания зеркал, датчик света и дождя, литые диски R19, порт быстрой зарядки CHADEMO,<br/> камера заднего вида, автопарковка, круиз контроль, заводская сигнализация, ABS и др. опции.<br/><br/>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Product;