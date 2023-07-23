"use client";
import React, { useState } from "react";
import { Tilt } from "react-tilt";

const CardDisplay = ({ post }) => {
    const defaultOptions = {
        reverse: false, // reverse the tilt direction
        max: 30, // max tilt rotation (degrees)
        perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1, // 2 = 200%, 1.5 = 150%, etc..
        speed: 200, // Speed of the enter/exit transition
        transition: false, // Set a transition on enter/exit.
        axis: null, // What axis should be disabled. Can be X or Y.
        reset: true, // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
    };

    const flipCard1 = () => {
        setTimeout(() => {
            document.getElementById(
                `card-back-${post.userName}`
            ).style.transform = "scale(1)";
        }, 50);
    };
    const flipCard2 = () => {
        document.getElementById(`card-back-${post.userName}`).style.transform =
            "scale(0)";

        setTimeout(() => {
            document.getElementById("card").style.transform = "scale(1)";
            document.getElementById("card").style.visibility = "visible";
        }, 50);
    };

    return (
        <div className="cardComponent">
            <Tilt options={defaultOptions}>
                <div
                    id="card"
                    onClick={flipCard1}
                    className="card"
                    style={{
                        background: "rgb(5, 200, 96)",
                        backgroundImage:
                            "linear-gradient(199deg, rgba(5, 200, 96, 1) 16%, rgba(11, 195, 97, 1) 57%, rgba(0, 41, 19, 1) 100%)",
                    }}
                >
                    <h2 id="card-name" className="card-name">
                        {post.userName}
                    </h2>
                    <p id="card-title" className="card-title">
                        {post.userTitle}
                    </p>
                </div>
            </Tilt>

            <div className="post-details">
                <h2
                    style={{
                        fontSize: "16px",
                        marginTop: "10px",
                    }}
                    id="card-title"
                    className="post-title"
                >
                    {post.title}
                </h2>
                <p
                    style={{
                        fontSize: "13px",
                        padding: "4px 0",
                        marginBottom: "10px",
                    }}
                >
                    {post.content}
                </p>
            </div>

            <Tilt options={defaultOptions}>
                <div
                    className="card card-back"
                    onClick={flipCard2}
                    id={`card-back-${post.userName}`}
                    style={{
                        background: "rgb(1, 48, 23)",
                        backgroundImage:
                            "linear-gradient(199deg, rgb(2, 69, 33) 16%, rgb(3, 61, 30) 57%, rgba(0, 41, 19, 1) 100%)",
                        transform: "scale(0)",
                    }}
                >
                    <div className="top-back">
                        <h2 id="back-name" className="popout-name">
                            {post.userName}
                        </h2>
                    </div>
                    <p id="back-title" className="popout-title">
                        {post.userTitle}
                    </p>
                    <h2 className="technologies-popout-header">Technologies</h2>
                    <p id="back-technologies">{post.technology}</p>
                    <h2 className="links-popout-header">Links</h2>
                    <div className="links-popout">
                        <a id="back-linkedin" href="#">
                            LinkedIn
                        </a>
                        <a id="back-github" href="#">
                            GitHub
                        </a>
                        <a id="back-twitter" href="#">
                            Twitter
                        </a>
                    </div>
                </div>
            </Tilt>
        </div>
    );
};

export default CardDisplay;
