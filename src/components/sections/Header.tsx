"use client";

// Utils
import animate from "@/utils/scrollAnimation";
// React state
import { useEffect, useRef } from "react";

const createDivs = (count: number) =>
    Array.from(Array(count), (_, index) => <div key={index}></div>);

export default function Header() {
    const list = useRef<HTMLDivElement>(null);
    const closeBtn = useRef<HTMLDivElement>(null);
    const nav = useRef<HTMLElement>(null);
    const header = useRef<HTMLElement>(null);
    const scrolling = useRef<number>(0);

    useEffect(() => {
        animate();
        window.onscroll = () => {
            if (scrollY != 0)
                header.current!.style.boxShadow =
                    "0 10px 30px -10px rgba(2, 12, 27, 0.7";
            else header.current!.style.boxShadow = "none";

            if (
                scrolling.current! <= scrollY &&
                nav.current!.style.right !== "0px"
            )
                header.current!.style.top = "-95px";
            else header.current!.style.top = "0";

            scrolling.current = scrollY;
        };
    }, []);

    return (
        <header className="header" ref={header}>
            <div className="header__container">
                <a href="#" className="header__logo">
                    Youssef
                </a>
                <nav
                    className="nav"
                    onClick={() =>
                        (nav.current!.style.right = "min(-70%, -350px)")
                    }
                    ref={nav}
                >
                    <div className="nav__close" ref={closeBtn}>
                        {createDivs(2)}
                    </div>
                    {["about", "projects", "contact"].map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className="nav__section-link"
                        >
                            {section}
                        </a>
                    ))}
                </nav>
                <div
                    className="header__list"
                    onClick={() => (nav.current!.style.right = "0")}
                    ref={list}
                >
                    {createDivs(3)}
                </div>
            </div>
        </header>
    );
}
