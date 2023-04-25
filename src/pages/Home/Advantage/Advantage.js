import React from 'react';
import ACard from './AdvantageCard'
import ACardImg1 from '../../../assets/advantage/a1.png'
import ACardImg2 from '../../../assets/advantage/a2.png'
import ACardImg3 from '../../../assets/advantage/a3.png'
import ACardImg4 from '../../../assets/advantage/a4.png'
import ACardImg5 from '../../../assets/advantage/David.png'
import ACardImg6 from '../../../assets/advantage/Sergey.png'

const Advantage = () => {
    return (
        <section className="advantage">
            <div className="container">
                <h2 className="advantage__title">Преимущества электротранспорта</h2>
                <div className="advantage__bottom">
                    <ACard title='Экологичность' subtitle='Экологически чистый транспорт <br/> не загрязняет окружающую среду лишним шумом, <br/>выхлопными газами и другими <br>вредными выбросами. Большое <br>количество электромобилей <br>благоприятно сказывается <br>на экологии больших городов <br/> с насыщенным трафиком.' img={ACardImg1}/>
                    <ACard title='Эргономичность' subtitle='Благодаря отсутствию ДВС,в салоне <br/> электрического авто больше места. <br/> Также, зачастую, электромобили <br/> имеют два багажника: спереди <br/> и сзади, что является довольно весомым аргументом в пользу электромобилей, как семейных авто.' img={ACardImg2}/>
                    <ACard title='Безопасность' subtitle='' img={ACardImg3}/>
                    <ACard title='Топливное преимущество' subtitle='' img={ACardImg4}/>
                    <ACard title='Простой сервис' subtitle='' img={ACardImg5}/>
                    <ACard title='Выгода использования' subtitle='' img={ACardImg6}/>
                </div>
            </div>
        </section>
    );
};

export default Advantage;