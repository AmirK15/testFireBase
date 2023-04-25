import React, {useState} from 'react';
import Send from '../../assets/overlay/send.svg'

const Overlay = ({ image, title, subtitle, setOverlay}) => {

    const [status, setStatus] = useState(false)

    const sendMessage = (e) => {
        e.preventDefault()
        setStatus(true)
        setTimeout(() => {
            setOverlay(false)
        }, 3000)
    }
    return (
        <div className="overlay">
            <div className="popup">
                <div onClick={() => setOverlay(false)} className="popup__close">X</div>
                <div className="popup__call">
                    <img className="popup__img" src={image} alt=""/>
                    <form onSubmit={(e) => sendMessage(e)} className="popup__form" action="">
                        <h2 className="popup__form-title">{title}</h2>
                        <p className="popup__form-subtitle">{subtitle}</p>
                        <input required className="popup__form-input" name="name" placeholder="Имя" type="text"/>
                        <input id="phone" required className="popup__form-input" name="phone" placeholder="Телефон"
                               type="tel"/>
                        <label className="popup__form-label">
                            <input name="confirm" required type="checkbox"/>
                            <span className="popup__form-label-text"><span>Я принимаю</span> пользовательское соглашение</span>
                        </label>
                        {
                            title.includes('драйв') || title.includes('авто') &&
                                <>
                                    <label className="popup__form-label">
                                        <span className="popup__form-label-text">Дата</span>
                                        <input type="date"/>
                                    </label>
                                    <label className="popup__form-label">
                                        <span className="popup__form-label-text">Время</span>
                                        <input type="time"/>
                                    </label>
                                </>
                        }
                        <button style={{width: '100%'}} type="submit" className="btn btn_green">Отправить
                        </button>
                    </form>
                </div>
                {
                    status &&
                    <div className="popup__send">
                        <img src={Send} alt="send"/>
                        <h3 className="popup__form-title">
                            Отправлено! <br/>
                            <br/>
                            С вами свяжутся в ближайшее время
                        </h3>
                    </div>
                }
            </div>
        </div>
    );
};

export default Overlay;