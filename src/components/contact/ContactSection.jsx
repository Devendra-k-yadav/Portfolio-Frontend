import { useEffect, useState } from "react";
import Toast from "../common/Toast";
import Reveal from "../common/Reveal";

const initialForm = { name: "", email: "", message: "" };

const ContactSection = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (!status.message) return undefined;

    const timeoutId = window.setTimeout(
      () => setStatus({ type: "", message: "" }),
      5000,
    );

    return () => window.clearTimeout(timeoutId);
  }, [status]);

  const handleChange = (event) => {
    setForm((currentForm) => ({
      ...currentForm,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/messages`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );
      const result = await response.json();
      if (!response.ok)
        throw new Error(result.message || "Unable to send your message");
      setForm(initialForm);
      setStatus({
        type: "success",
        message: result.emailSent
          ? "Message sent successfully. I will get back to you soon."
          : "Message saved successfully. Email notification is not configured yet.",
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus({
        type: "error",
        message: "Message not delivered. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Toast
        type={status.type}
        message={status.message}
        onClose={() => setStatus({ type: "", message: "" })}
      />
      <section id="contact">
        <div className="container">
          <Reveal className="get-in-touch">
            <div className="contact-info">
              <div className="section-kicker">✈ Get In Touch</div>
              <h2>Let&apos;s build something together!</h2>
              <p>
                Have an idea, project or opportunity? I&apos;d love to hear from
                you.
              </p>
              <div className="contact-details">
                <a href="mailto:devendrapratap992@gmail.com">
                  <span>✉</span>
                  <strong>
                    Email<span>devendrapratap992@gmail.com</span>
                  </strong>
                </a>
                <a href="tel:+91xxxxxxxxx">
                  <span>⌕</span>
                  <strong>
                    Phone<span>+91 xxxxxxxxxx</span>
                  </strong>
                </a>
                <div>
                  <span>⌖</span>
                  <strong>
                    Location<span>India</span>
                  </strong>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>✦ Your Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </label>
              <label>
                <span>✉ Your Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </label>
              <label className="message-field">
                <span>▤ Your Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                />
              </label>
              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "✈ Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
