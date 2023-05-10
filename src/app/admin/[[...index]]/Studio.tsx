"use client";

import config from "@/sanityConfig";
import { NextStudio } from "next-sanity/studio";

export default function Studio() {
    return <NextStudio config={config} />;
}
