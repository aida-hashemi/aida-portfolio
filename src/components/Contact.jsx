import "./Contact.css";

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    alert("Message sent successfully!");
  }

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p>Feel free to contact me for collaboration or opportunities.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Your Email" />

        <textarea placeholder="Your Message" rows="6"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
