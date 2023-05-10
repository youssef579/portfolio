export default function animate() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.4 }
    );

    document
        .querySelectorAll(
            ".about, .contact, .projects :is(h1, h2, .project), .technology"
        )
        .forEach((element) => observer.observe(element));
}
