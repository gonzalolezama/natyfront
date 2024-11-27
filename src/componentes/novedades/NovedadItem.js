import React from "react";

const NovedadItem = (props) => {
    const{ title, subtitle, imagen, body } = props;

    return (
        <div className="novedades">
            <h4>{title}</h4>
            <p> {subtitle} </p>
            <img src={imagen} alt={title}  style={{ marginLeft: '10px', borderRadius: '10%', width: '120px', height: '120px', boxShadow: '0 0 5px rgba(0,0,0,0.5)' }} />
            <div dangerouslySetInnerHTML={{__html:body}} />
            <hr />
        </div>
    
    );
}

export default NovedadItem;