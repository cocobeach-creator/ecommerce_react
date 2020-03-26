import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({title, image, size}) => (
    <div className={`${size} menu-item`}>
        <div className="background-image" style={{
        backgroundImage: `url(${image})`
    }}/>
        <div className="content">
            <h1 className="title">{title}</h1>
            <h3 className="subtitle">SHOP NOW</h3>
        </div>
    </div>
)

export default MenuItem;