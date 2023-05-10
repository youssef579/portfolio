import { createClient, groq } from "next-sanity";
import { cache } from "react";
import type { Project, Technology } from "./types";

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_DATASET!,
    apiVersion: process.env.NEXT_PUBLIC_API_VERSION!,
    useCdn: process.env.NODE_ENV === "production",
});

const sanityFetch = cache(client.fetch.bind(client));

const getDocumentTypes = () =>
    sanityFetch<{
        projects: Project[];
        technologies: Technology[];
    }>(groq`{
        'projects': *[_type == "project"] | order(order) {
            "id": _id,
            title,
            description,
            "image": image.asset->url,
            techStack,
            githubRepo,
            externalLink,
        }, 
        'technologies': *[_type == 'technology'] | order(order) {
            "id": _id,
            name,
            "image": image.asset->url,
            "color": image.asset->metadata.palette.dominant.background
        }
      }`);

export default getDocumentTypes;
