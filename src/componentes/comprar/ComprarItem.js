import React from "react";

const ComprarItem = (props) => {
    const{ ti, zo, ub, tip, imagen, pr, des } = props;
// aca donde armo el diseño
    return (
        <div className="comprar">
            <h4>{ti}</h4>
            <h5> {zo} </h5>
            <h5> {ub} </h5>
            <h5> {tip} </h5>
            <img src={imagen} alt={ti} />
            <h6> u$s {pr} </h6>
            
            <div className="contenido" dangerouslySetInnerHTML={{__html:des}} />
            <hr />
        </div>
    
    );
}

export default ComprarItem;