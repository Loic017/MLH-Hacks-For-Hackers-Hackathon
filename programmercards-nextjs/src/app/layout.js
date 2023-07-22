import { Inter } from "next/font/google";
import "./global.css";
import NavigationBar from "./navbar.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Programmer Card",
    description: "Find Programmers",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavigationBar />
                <hr class="green-divider" />
                {children}
            </body>
        </html>
    );
}
