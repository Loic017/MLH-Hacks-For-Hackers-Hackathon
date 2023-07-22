import React from "react";
import logo from "./logo.png";
import Image from "next/image";
import Link from "next/link";

const NavigationBar = () => {
    return (
        <div className="navbar">
            <a href="index.html">
                <Image src={logo} className="logo" />
            </a>
            <ul class="links">
                <li>
                    <Link href="/">My Card</Link>
                </li>
                <li>
                    <Link href="/marketplace">Marketplace</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavigationBar;
