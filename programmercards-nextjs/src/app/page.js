import Image from "next/image";
import styles from "./styles.css";
import NavigationBar from "./navbar.js";
import CardComponent from "./programmerCard";
import ProgrammerCardHeadings from "./programmerCardHeadings";

export default function Home() {
    return (
        <div>
            <NavigationBar />
            <hr class="green-divider" />
            <ProgrammerCardHeadings />
            <CardComponent />
        </div>
    );
}
