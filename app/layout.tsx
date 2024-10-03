import type { Metadata } from "next";

import "./globals.css";

import { poppins } from "@/lib/fonts";
import { createClient } from "@/lib/supabase/server";

import Footer from "./components/footer";
import Header from "./components/header";

export const metadata: Metadata = {
    title: "Dibujando Derechos",
    description: 'Pagina del concurso de dibujos "Dibujando Derechos"',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const supabase = createClient();

    const { data, error } = await supabase.from("schools").select("*");

    if (error) return "Error Cargando la Pagina, Por favor Recargar";
    return (
        <html className="h-full w-full scroll-smooth" lang="en">
            <body
                className={`${poppins.className} relative flex min-h-screen w-full flex-col bg-background antialiased`}
            >
                <div className="absolute top-0 -z-10 h-screen w-full bg-gradient-to-b from-light from-0% to-background to-30%"></div>
                <Header schools={data} />
                {children}
                <Footer />
            </body>
        </html>
    );
}
