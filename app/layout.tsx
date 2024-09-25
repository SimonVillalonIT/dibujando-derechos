import type { Metadata } from "next";

import "./globals.css";

import { poppins } from "@/lib/fonts";

import Footer from "./components/footer";
import Header from "./components/header";

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
        <html className="h-full w-full" lang="en">
            <body
                className={`${poppins.className} relative w-full scroll-smooth bg-background antialiased`}
            >
                <div className="absolute top-0 -z-10 h-screen w-full bg-gradient-to-b from-light from-0% to-background to-30%"></div>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
