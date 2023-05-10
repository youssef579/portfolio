// Import assets
import logo from "../../../public/logo.webp";
// Next image optimization
import Image from "next/image";
import type { Technology as T } from "@/sanity/types";
import Technology from "@/components/Technology";

export default function About({ technologies }: { technologies: T[] }) {
    return (
        <section className="about" id="about">
            <div className="about__container">
                <h1 className="about__heading about__heading--section-heading">
                    About me
                    <hr />
                </h1>
                <div className="content">
                    <div className="content__bio">
                        <p>
                            Hello! My name is Youssef Ragaey, I&apos;m{" "}
                            {new Date().getFullYear() -
                                new Date("2007-05-01").getFullYear()}{" "}
                            years old and Interested in computer science. I
                            started programming by taking{" "}
                            <a
                                href="https://tinyurl.com/2kdaobma"
                                target="_blank"
                                className="about__external-link about__external-link--green-link"
                            >
                                CS50
                            </a>{" "}
                            course from harvard in 2020 when I decided to learn
                            how to code and make stuff out of the box.
                        </p>
                        <br />
                        <p>
                            In 2021, I started to think about the internet and
                            how it works, so I focused on web development
                            (especially front-end) and doing my best here.
                        </p>
                        <br />
                        <p>
                            Here are a few technologies I&apos;ve been working
                            with:
                        </p>
                        <ul className="content__technologies">
                            {technologies.map((technology) => (
                                <Technology
                                    key={technology.id}
                                    {...technology}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="content__image">
                        <Image
                            src={logo}
                            alt="Logo"
                            fill
                            placeholder="blur"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
