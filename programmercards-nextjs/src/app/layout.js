import { Inter } from "next/font/google";
import "./global.css";
import NavigationBar from "./navbar.js";
import FooterB from "./footer.js";
import { NextAuthProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Programmer Card",
    description: "Find Programmers",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextAuthProvider>
                    <NavigationBar />
                    <hr class="green-divider" />
                    {children}
                    <FooterB />
                </NextAuthProvider>
            </body>
        </html>
    );
}
