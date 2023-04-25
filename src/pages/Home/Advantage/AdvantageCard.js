import React from 'react';

const AdvantageCard = ({img, title, subtitle}) => {
    return (
        <div className="advantage__card">
            <div className="advantage__card-content">
                <img src={img} alt="" className="advantage__card-img"/>
                <div className="advantage__card-text">
                    <h3 className="advantage__card-title">{title}</h3>
                    <p className="advantage__card-subtitle" dangerouslySetInnerHTML={{__html: subtitle}}/>
                </div>
            </div>
        </div>
    );
};

export default AdvantageCard;