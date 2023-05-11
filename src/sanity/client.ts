import { createClient, groq } from "next-sanity";
import type { Project, Technology } from "./types";

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_API_READ_TOKEN,
    apiVersion: "2023-05-04",
});

export default function getDocumentTypes() {
    return client.fetch<{
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
}
