import styles from "../styles.css";
import CardDisplay from "../cards-display";

export default async function Home() {
    return (
        <div className="page-container">
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
            <div className="posts-display">
                <CardDisplay
                    post={{
                        userID: "bob",
                        title: "Looking for a front-end developer",
                        content: "Need a front-end developer to join my team",
                        userName: "John",
                        userTitle: "Software Engineer",
                        technology: "Python",
                        linkedin: "John",
                        github: "John",
                        twitter: "John",
                    }}
                />
                <CardDisplay
                    post={{
                        userID: "bob",
                        title: "Need a team for the [name] hackathon.",
                        content:
                            "I have python experience, it will be my first hackathon!",
                        userName: "Paul",
                        userTitle: "Software Engineer",
                        technology: "Python",
                        linkedin: "John",
                        github: "John",
                        twitter: "John",
                    }}
                />
                <CardDisplay
                    post={{
                        userID: "bob",
                        title: "Free one on one mentor sessions",
                        content:
                            "I would like to select a few programmers to mentor.",
                        userName: "Emma",
                        userTitle: "Backend Developer",
                        technology: "Java",
                        linkedin: "John",
                        github: "John",
                        twitter: "John",
                    }}
                />
                <CardDisplay
                    post={{
                        userID: "bob",
                        title: "Looking to join a team for a project",
                        content:
                            "Would like to get collaborative programming experience.",
                        userName: "Max",
                        userTitle: "Web Developer",
                        technology: "HTML, CSS, JavaScript",
                        linkedin: "John",
                        github: "John",
                        twitter: "John",
                    }}
                />
                <CardDisplay
                    post={{
                        userID: "bob",
                        title: "Looking an SEO specialist",
                        content: "I need help with SEO on my website",
                        userName: "Jessica",
                        userTitle: "Web Developer",
                        technology: "HTML, CSS, JavaScript",
                        linkedin: "John",
                        github: "John",
                        twitter: "John",
                    }}
                />
            </div>
        </div>
    );
}
