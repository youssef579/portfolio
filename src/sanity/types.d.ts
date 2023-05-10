import type { PortableTextBlock } from "sanity";

export interface Project {
    id: string;
    title: string;
    image?: string;
    techStack: string[];
    githubRepo: string;
    externalLink: string;
    description: PortableTextBlock[];
}

export interface Technology {
    id: string;
    name: string;
    image: string;
    color: string;
}
