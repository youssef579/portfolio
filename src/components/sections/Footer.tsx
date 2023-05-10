import Image from "next/image";

export default function Footer() {
    const socialAccounts = [
        {
            name: "Github",
            href: "https://github.com/youssef579",
        },
        {
            name: "Discord",
            href: "https://discordapp.com/users/844681311490277426",
        },
        {
            name: "CodePen",
            href: "https://codepen.io/youssef579",
        },
    ];

    return (
        <footer className="footer">
            <div className="footer__container">
                <a
                    href="mailto:youssefragaa3@gmail.com?subject=Hi%22!&body=Hello%22!"
                    target="_blank"
                    className="footer__author-email"
                >
                    youssefragaa3@gmail.com
                </a>
                <ul className="footer__social-links">
                    {socialAccounts.map(({ name, href }) => (
                        <li key={name}>
                            <a href={href} target="_blank" title={name}>
                                <Image
                                    src={`/svgs/${name.toLowerCase()}.svg`}
                                    alt={name}
                                    width={22}
                                    height={22}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
                <p className="footer__body">
                    Designed & Built by{" "}
                    <span className="footer__author">Youssef Ragaey</span>
                </p>
            </div>
        </footer>
    );
}
