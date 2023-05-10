// Get content from sanity
import getDocumentTypes from "@/sanity/client";
// Page UI
import Header from "@/components/sections/Header";
import Landing from "@/components/sections/Landing";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
// Styling
import "normalize.css";
import "@/scss/pages/index.scss";

export const dynamic = "force-dynamic";

export default async function Home() {
    const { technologies, projects } = await getDocumentTypes();

    return (
        <>
            <Header />
            <Landing />
            <About technologies={technologies} />
            <Projects projects={projects} />
            <Contact />
            <Footer />
        </>
    );
}
