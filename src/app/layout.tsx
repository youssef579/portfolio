// Next Google Fonts
import { Roboto, Roboto_Mono } from "next/font/google";
// Vercel analytics
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    fallback: ["sans-serif"],
});

const robotoMono = Roboto_Mono({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    variable: "--mono",
    fallback: ["monospace"],
});

export const metadata = {
    title: "Youssef Ragaey",
    description: "An Expert Front-end Developer",
    authors: [{ name: "Youssef Ragaey", url: "https://github.com/youssef579" }],
    keywords: "portfolio, web development, react developer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${roboto.className} ${robotoMono.variable}`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
