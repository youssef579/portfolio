// Schemas
import project from "@/sanity/schemas/project";
import technology from "@/sanity/schemas/technology";
// Sanity config
import { defineConfig } from "sanity";
// Sanity plugins
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

export default defineConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    title: "Youssef Ragaey",
    basePath: "/admin",
    plugins: [deskTool(), visionTool()],
    schema: { types: [project, technology] },
});
