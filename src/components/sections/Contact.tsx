export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <h1 className="contact__heading">What&apos;s next?</h1>
                <h2 className="contact__subheading">get in touch</h2>
                <p className="contacT__body">
                    My inbox is always open for you!
                    <br />
                    Want to send me a message? Don&apos;t hesitate.
                </p>
                <a
                    href="mailto:youssefragaa3@gmail.com?subject=Hi%20!&body=Hello%20!"
                    target="_blank"
                    className="contact__send-email contact__send-email--green-btn"
                >
                    Say Hello
                </a>
            </div>
        </section>
    );
}
