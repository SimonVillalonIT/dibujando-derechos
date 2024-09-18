import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F8F8F8",
                foreground: "#000000",
                primary: "#A3A2A2"
            },
            fontFamily: { sans: ["var(--poppins)", ...fontFamily.sans] },
        },
    },
    plugins: [],
};
export default config;
