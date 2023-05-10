"use client";

// Sanity types
import type { Project } from "@/sanity/types";
// Next image optimization
import Image from "next/image";
// React state
import { useEffect, useRef } from "react";
// Render sanity's portable content
import { PortableText, type PortableTextComponents } from "@portabletext/react";

export default function FeaturedProject({
    description,
    externalLink,
    githubRepo,
    techStack,
    title,
    image,
}: Omit<Project, "id">) {
    const imageContainer = useRef<HTMLDivElement>(null);
    const components: PortableTextComponents = {
        block: {
            normal: ({ children }) => (
                <p className="content__description">{children}</p>
            ),
        },
        marks: {
            link: ({ value, children }) => (
                <a
                    className="content__external-link content__external-link--green-link"
                    href={value.href}
                    target="_blank"
                >
                    {children}
                </a>
            ),
        },
    };

    function adjustImageSize() {
        if (window.innerWidth <= 767)
            imageContainer.current!.style.height = `calc(${
                (imageContainer.current!.nextElementSibling as HTMLDivElement)
                    .clientHeight
            }px + clamp(40px, 10vw , 80px))`;
    }

    useEffect(() => {
        adjustImageSize();
        window.addEventListener("scroll", adjustImageSize);

        return () => window.removeEventListener("scroll", adjustImageSize);
    }, []);

    return (
        <div className="project">
            <div className="project__image" ref={imageContainer}>
                <Image src={image!} alt={title} fill />
            </div>
            <article className="content">
                <p className="content__type">Featured Project</p>
                <a
                    className="content__title"
                    href={externalLink}
                    target="_blank"
                >
                    {title}
                </a>
                <PortableText value={description} components={components} />
                <ul className="content__tech-stack">
                    {techStack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
                <ul className="content__external-links">
                    <li>
                        <a href={githubRepo} target="_blank" title="Github Repo">
                            <Image
                                src="/svgs/github.svg"
                                alt="Github Repo"
                                width={20}
                                height={20}
                            />
                        </a>
                    </li>
                    <li>
                        <a href={externalLink} target="_blank" title="External Link">
                            <Image
                                src="/svgs/link.svg"
                                alt="External Link"
                                width={20}
                                height={20}
                            />
                        </a>
                    </li>
                </ul>
            </article>
        </div>
    );
}
