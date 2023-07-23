"use client";
import styles from "../styles.css";
import { useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { POST } from "../api/posts/route";
import { useRouter } from "next/navigation";

export default function PostCard() {
    // const { data: session, status } = useSession();
    const userId = "temp";
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userName, setUserName] = useState("");
    const [userTitle, setUserTitle] = useState("");
    const [technology, setTechnology] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [twitter, setTwitter] = useState("");

    const router = useRouter();

    const submitPost = async () => {
        try {
            const a = [
                userId,
                title,
                content,
                userName,
                userTitle,
                technology,
                linkedin,
                github,
                twitter,
            ];
            console.log(a);
            const res = await fetch("http://localhost:3000/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId,
                    title,
                    content,
                    userName,
                    userTitle,
                    technology,
                    linkedin,
                    github,
                    twitter,
                }),
            });
            console.log(res);

            if (res.ok) {
                router.push("/marketplace");
            } else {
                throw new Error("Post was not created");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="create-post-container">
            <div className="left-side-create-post"></div>
            <div className="post-card">
                <h1>Create Your Post</h1>
                <p>Post Title</p>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    id="Post-Title"
                />
                <p>Post Content</p>
                <input
                    onChange={(e) => setContent(e.target.value)}
                    type="text"
                    id="Post-Content"
                />
                <p>Card Name</p>
                <input
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    id="Name"
                />
                <p>Card Title</p>
                <input
                    onChange={(e) => setUserTitle(e.target.value)}
                    type="text"
                    id="Title-Role"
                />
                <p>Technology</p>
                <input
                    onChange={(e) => setTechnology(e.target.value)}
                    type="text"
                    id="Technology"
                />
                <p>LinkedIn Username</p>
                <input
                    onChange={(e) => setLinkedin(e.target.value)}
                    type="text"
                    id="LinkedIn"
                />
                <p>GitHub Username</p>
                <input
                    onChange={(e) => setGithub(e.target.value)}
                    type="text"
                    id="GitHub"
                />
                <p>Twitter Tag</p>
                <input
                    onChange={(e) => setTwitter(e.target.value)}
                    type="text"
                    id="Twitter"
                />
                <button onClick={submitPost} className="submit">
                    Submit
                </button>
            </div>
        </div>
    );
}
