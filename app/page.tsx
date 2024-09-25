import Hero from "./components/hero";
import SchoolsMap from "./components/map";
import { Pictures } from "./components/pictures";
import Unknown from "./components/unknown";

export default function Home() {
    return (
        <main className="h-full w-full">
            <Hero />
            <SchoolsMap />
            <Pictures />
            <Unknown />
        </main>
    );
}
