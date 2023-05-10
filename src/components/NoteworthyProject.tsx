import type { Project } from "@/sanity/types";
import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";

export default function NoteworthyProject({
    description,
    externalLink,
    githubRepo,
    techStack,
    title,
    image,
}: Omit<Project, "id">) {
    const components: PortableTextComponents = {
        block: {
            normal: ({ children }) => (
                <p className="project__description">{children}</p>
            ),
        },
        marks: {
            link: ({ value, children }) => (
                <a
                    className="project__external-link project__external-link--green-link"
                    href={value.href}
                    target="_blank"
                >
                    {children}
                </a>
            ),
        },
    };

    return (
        <div className="project">
            <div className="project__icons">
                <Image
                    src="/svgs/folder.svg"
                    alt="Project"
                    width={40}
                    height={40}
                />
                <ul className="links">
                    {githubRepo && (
                        <li>
                            <a
                                href={githubRepo}
                                target="_blank"
                                title="Github Repo"
                            >
                                <Image
                                    src="/svgs/github.svg"
                                    alt="Github Repo"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </li>
                    )}
                    {externalLink && (
                        <li>
                            <a
                                href={externalLink}
                                target="_blank"
                                title="External Link"
                            >
                                <Image
                                    src="/svgs/link.svg"
                                    alt="External Link"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </li>
                    )}
                </ul>
            </div>
            <a
                href={externalLink ? externalLink : githubRepo}
                className="project__title"
                target="_blank"
            >
                {title}
            </a>
            <PortableText value={description} components={components} />
            <ul className="project__tech-stack">
                {techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </div>
    );
}
