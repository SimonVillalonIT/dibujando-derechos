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
            animation: { fadeIn: "fade-in ease-in-out 0.25s 1" },
            keyframes: {
                "fade-in": {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
            },
            colors: {
                background: "#F8F8F8",
                foreground: "#262626",
                primary: "#595959",
                secondary: "#01A9E0",
                black: "#0D0D0D",
                light: "#8C8C8C",
            },
            fontFamily: { sans: ["var(--poppins)", ...fontFamily.sans] },
            dropShadow: {
                red: "0 35px 35px #D6D6D6",
            },
        },
    },
    plugins: [],
};
export default config;
