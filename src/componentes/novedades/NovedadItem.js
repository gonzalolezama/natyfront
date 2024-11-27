import React from "react";

const NovedadItem = (props) => {
    const{ title, subtitle, imagen, body } = props;

    return (
        <div className="novedades">
            <h4>{title}</h4>
            <p> {subtitle} </p>
            <img src={imagen} alt={title} />
            <div dangerouslySetInnerHTML={{__html:body}} />
            <hr />
        </div>
    
    );
}

export default NovedadItem;