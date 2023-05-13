const schema = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: "order",
            title: "Order",
            type: "number",
        },
        {
            name: "techStack",
            title: "Tech Stack",
            type: "array",
            of: [{ type: "string" }],
        },
        {
            name: "githubRepo",
            title: "GitHub Repo",
            type: "url",
        },
        {
            name: "externalLink",
            title: "External Link",
            type: "url",
        },
    ],
};

export default schema;
