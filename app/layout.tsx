import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import Header from "./components/header/header";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--poppins",
});

export const metadata: Metadata = {
    title: "Dibujando Derechos",
    description: 'Pagina del concurso de dibujos "Dibujando Derechos"',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} bg-background antialiased`}>
                <Header />
                {children}
            </body>
        </html>
    );
}
