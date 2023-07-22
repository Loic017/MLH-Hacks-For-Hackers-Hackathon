import React from "react";
import Image from "next/image";

const ProgrammerCardHeadings = () => {
    return (
        <div className="programmer-card">
            <h1 className="header">Your Programmer Card</h1>
            <div className="card-container">
                <button className="makePost">Make a Post</button>
            </div>
        </div>
    );
};

export default ProgrammerCardHeadings;
