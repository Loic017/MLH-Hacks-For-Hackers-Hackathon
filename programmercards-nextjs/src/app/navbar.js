"use client";
import React from "react";
import logo from "./logo.png";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

const NavigationBar = () => {
    const { data: session, status } = useSession();

    if (status === "authenticated") {
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
                    <li>
                        <button
                            className="login"
                            onClick={() => signOut("github")}
                        >
                            Sign Out
                        </button>
                    </li>
                    <li>
                        <Image
                            src={session.user.image}
                            width={40}
                            height={40}
                            className="profilePic"
                        ></Image>
                    </li>
                </ul>
            </div>
        );
    }

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
                <li>
                    <button className="login" onClick={() => signIn("github")}>
                        Log In
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default NavigationBar;
