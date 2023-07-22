import React from "react";
import logo from "./logo.png";
import Image from "next/image";

const NavigationBar = () => {
    return (
        <div className="navbar">
            <a href="index.html">
                <Image src={logo} className="logo" />
            </a>
            <ul class="links">
                <li>
                    <a href="index.html">My Card</a>
                </li>
                <li>
                    <a href="index.html">Marketplace</a>
                </li>
            </ul>
        </div>
    );
};

export default NavigationBar;
