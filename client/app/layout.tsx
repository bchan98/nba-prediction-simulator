import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Homebar from "../components/Homebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sports Prediction Simulator",
    description: "Website to generate predictions on the outcome of sports matches",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body>
                <div>
                    <Homebar />
                    <div className={inter.className}>{children}</div>
                </div>
            </body>
        </html>
    );
}
