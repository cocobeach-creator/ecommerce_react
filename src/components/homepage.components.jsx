import React from "react";
import "./homepage.styles.scss";

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">HATS</h1>
                    <h3 className="subtitle">SHOP NOW</h3>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">JACKETS</h1>
                    <h3 className="subtitle">SHOP NOW</h3>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">SHOES</h1>
                    <h3 className="subtitle">SHOP NOW</h3>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">MEN</h1>
                    <h3 className="subtitle">SHOP NOW</h3>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">WOMEN</h1>
                    <h3 className="subtitle">SHOP NOW</h3>
                </div>
            </div>
        </div>
    </div>
   
);

export default HomePage;