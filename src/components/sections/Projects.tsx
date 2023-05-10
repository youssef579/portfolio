import type { Project } from "@/sanity/types";
import FeaturedProject from "@/components/FeaturedProject";
import NoteworthyProject from "@/components/NoteworthyProject";

export default function Projects({ projects }: { projects: Project[] }) {
    return (
        <section className="projects" id="projects">
            <div className="projects__container">
                <h1 className="projects__heading projects__heading--section-heading">
                    Some things I&apos;ve built
                    <hr />
                </h1>
                <div className="projects__featured-projects">
                    {projects
                        .filter((project) => project.image)
                        .map((project) => (
                            <FeaturedProject key={project.id} {...project} />
                        ))}
                </div>
                <h2 className="projects__subheading">
                    Other Noteworthy Projects
                </h2>
                <div className="projects__noteworthy-projects">
                    {projects
                        .filter((project) => !project.image)
                        .map((project) => (
                            <NoteworthyProject key={project.id} {...project} />
                        ))}
                </div>
            </div>
        </section>
    );
}
