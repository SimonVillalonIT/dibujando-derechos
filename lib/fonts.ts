import { Poppins } from "next/font/google";
import local from "next/font/local";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--poppins",
});

const allura = local({ src: "../public/fonts/Allura-Regular.ttf" });

export { allura, poppins };
