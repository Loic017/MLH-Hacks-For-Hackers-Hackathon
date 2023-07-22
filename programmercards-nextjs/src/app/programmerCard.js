"use client";
import React, { useState } from "react";
import { Tilt } from "react-tilt";

const CardComponent = () => {
    const defaultOptions = {
        reverse: false, // reverse the tilt direction
        max: 25, // max tilt rotation (degrees)
        perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1, // 2 = 200%, 1.5 = 150%, etc..
        speed: 200, // Speed of the enter/exit transition
        transition: false, // Set a transition on enter/exit.
        axis: null, // What axis should be disabled. Can be X or Y.
        reset: false, // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
    };

    const flipCard1 = () => {
        document.getElementById("click-text").style.transform = "scale(0)";
        setTimeout(() => {
            document.getElementById("card-back").style.transform = "scale(1)";
        }, 50);
    };
    const flipCard2 = () => {
        document.getElementById("card-back").style.transform = "scale(0)";
        document.getElementById("click-text").style.transform = "scale(0)";
        setTimeout(() => {
            document.getElementById("card").style.transform = "scale(1)";
            document.getElementById("card").style.visibility = "visible";
            document.getElementById("click-text").style.transform = "scale(0)";
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
                        John
                    </h2>
                    <p id="card-title" className="card-title">
                        Software Engineer
                    </p>
                </div>
            </Tilt>

            <div className="click-on-me" id="click-text">
                <p>Click on me</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="17"
                    viewBox="0 0 33 17"
                    fill="none"
                >
                    <path
                        d="M0.833333 3C0.833333 4.47276 2.02724 5.66667 3.5 5.66667C4.97276 5.66667 6.16667 4.47276 6.16667 3C6.16667 1.52724 4.97276 0.333333 3.5 0.333333C2.02724 0.333333 0.833333 1.52724 0.833333 3ZM33 8.5L27.6991 10.7877L32.3307 14.2346L33 8.5ZM3.02415 3.1535C7.53929 17.1504 22.5434 20.5155 30.6649 12.4659L29.9609 11.7556C22.4566 19.1936 8.30104 16.2546 3.97585 2.8465L3.02415 3.1535Z"
                        fill="white"
                    />
                </svg>
            </div>

            <Tilt options={defaultOptions}>
                <div
                    className="card"
                    onClick={flipCard2}
                    id="card-back"
                    style={{
                        background: "rgb(1, 48, 23)",
                        backgroundImage:
                            "linear-gradient(199deg, rgb(2, 69, 33) 16%, rgb(3, 61, 30) 57%, rgba(0, 41, 19, 1) 100%)",
                        transform: "scale(0)",
                    }}
                >
                    <div className="top-back">
                        <h2 id="back-name" className="popout-name">
                            John
                        </h2>
                    </div>
                    <p id="back-title" className="popout-title">
                        Software Engineer
                    </p>
                    <h2 className="technologies-popout-header">Technologies</h2>
                    <p id="back-technologies">HTML, CSS, JavaScript</p>
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

export default CardComponent;
