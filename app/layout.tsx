import type { Metadata } from "next";
import "./globals.css";
import DeskNav from "@/components/DeskNav";

export const metadata: Metadata = {
    title: "Hard",
    description: "All the data you need about your hardware",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <DeskNav />
                {children}
            </body>
        </html>
    );
}
