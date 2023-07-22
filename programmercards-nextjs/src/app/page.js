import Image from "next/image";
import styles from "./styles.css";
import CardComponent from "./programmerCard";
import ProgrammerCardHeadings from "./programmerCardHeadings";

export default function Home() {
    return (
        <div>
            <ProgrammerCardHeadings />
            <CardComponent />
        </div>
    );
}
