import type { Metadata } from "next";

import "./globals.css";

import { poppins } from "@/lib/fonts";

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
                <Header />
                {children}
            </body>
        </html>
    );
}
