export default function Landing() {
    return (
        <main className="landing">
            <div className="landing__container">
                <h1 className="landing__text">Hi, my name is</h1>
                <h2 className="landing__heading">Youssef Ragaey.</h2>
                <h3 className="landing__subheading">
                    I build stuff for the web.
                </h3>
                <p className="landing__bio">
                    I&apos;ve learned front-end development since I was 14. Now
                    I&apos;m focusing on improving my skills and knowledge. You
                    can see my work on{" "}
                    <a
                        href="https://github.com/youssef579"
                        target="_blank"
                        className="landing__external landing__external-link--green-link"
                    >
                        GitHub
                    </a>{" "}
                    for more details. Have a nice day!
                </p>
                <a
                    href="#projects"
                    className="landing__navigator landing__navigator--green-btn"
                >
                    Check out my work!
                </a>
            </div>
        </main>
    );
}
