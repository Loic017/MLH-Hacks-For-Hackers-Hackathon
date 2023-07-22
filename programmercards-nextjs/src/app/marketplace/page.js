"use client";
import styles from "../styles.css";
import { signIn, useSession, signOut } from "next-auth/react";

export default function Home() {
    const { data: session, status } = useSession();
    if (status === "authenticated") {
        return (
            <div className="marketplace-container">
                <div className="filters">
                    <p>Filters</p>
                    <form action="">
                        <label className="checkbox" htmlFor="hackathon">
                            Hackathon
                        </label>
                        <input type="checkbox" id="hackathon" />
                        <label htmlFor="hackathon">Team Building</label>
                        <input
                            className="checkbox"
                            type="checkbox"
                            id="team-building"
                        />
                        <label htmlFor="hackathon">Mentorship</label>
                        <input
                            className="checkbox"
                            type="checkbox"
                            id="mentorship"
                        />
                        <label htmlFor="hackathon">Web Dev</label>
                        <input
                            className="checkbox"
                            type="checkbox"
                            id="web-dev"
                        />
                        <label htmlFor="hackathon">Backend</label>
                        <input
                            className="checkbox"
                            type="checkbox"
                            id="backend"
                        />
                        <label htmlFor="hackathon">Frontend</label>
                        <input
                            className="checkbox"
                            type="checkbox"
                            id="frontend"
                        />
                        <label htmlFor="hackathon">Python</label>
                        <input
                            className="checkbox"
                            type="checkbox"
                            id="python"
                        />
                        <label htmlFor="hackathon">Java</label>
                        <input className="checkbox" type="checkbox" id="java" />
                    </form>
                </div>
                <hr className="footerhr footermarket" />
            </div>
        );
    } else {
        return (
            <div className="marketplaceSignedOut">
                <h1>Log In to view the Marketplace</h1>
                <button className="login" onClick={() => signIn("github")}>
                    Sign In
                </button>
            </div>
        );
    }
}
