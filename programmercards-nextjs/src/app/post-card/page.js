"use client";
import styles from "../styles.css";

export default function PostCard() {
    return (
        <div className="create-post-container">
            <div className="left-side-create-post"></div>
            <div className="post-card">
                <h1>Create Your Post</h1>
                <p>Post Title</p>
                <input type="text" id="Post-Title" />
                <p>Post Content</p>
                <input type="text" id="Post-Content" />
                <p>Card Name</p>
                <input type="text" id="Name" />
                <p>Card Title</p>
                <input type="text" id="Title-Role" />
                <p>LinkedIn Username</p>
                <input type="text" id="LinkedIn" />
                <p>GitHub Username</p>
                <input type="text" id="GitHub" />
                <p>Twitter Tag</p>
                <input type="text" id="Twitter" />
                <button className="submit">Submit</button>
            </div>
        </div>
    );
}
