import { useState } from "react";
import Icon, { Sparkle } from "../components/Icon.jsx";
import { Reveal, SplitTitle } from "../components/Motion.jsx";
import { SOCIALS, isExternal } from "../data/site.js";

// Web3Forms access keys are public by design: they only allow sending to the owner's inbox.
const WEB3FORMS_KEY = "3ec5d3db-740f-4979-87eb-a3a6f0e3958d";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 10;

const FIELDS = [
  { name: "name", label: "your name", type: "text", autoComplete: "name" },
  { name: "email", label: "email", type: "email", autoComplete: "email" },
  { name: "message", label: "message", type: "textarea" },
];

function validate(name, value) {
  const trimmed = value.trim();
  if (name === "name") return trimmed ? "" : "please tell me your name.";
  if (name === "email") {
    if (!trimmed) return "i'll need an email to reply to.";
    return EMAIL_PATTERN.test(trimmed) ? "" : "that email doesn't look quite right.";
  }
  if (name === "message") {
    return trimmed.length >= MIN_MESSAGE_LENGTH ? "" : `a few more words, please (${MIN_MESSAGE_LENGTH}+ characters).`;
  }
  return "";
}

function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = Object.fromEntries(FIELDS.map(({ name }) => [name, validate(name, values[name])]));
    setErrors(nextErrors);

    const firstInvalid = FIELDS.find(({ name }) => nextErrors[name]);
    if (firstInvalid) {
      event.currentTarget.elements[firstInvalid.name].focus();
      return;
    }

    // Honeypot: bots fill hidden fields, people don't.
    if (event.currentTarget.elements.botcheck.checked) return;

    setIsSending(true);
    setStatus({ type: "", text: "" });

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `new portfolio message from ${values.name.trim()}`,
          ...values,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || `status ${response.status}`);

      setStatus({ type: "success", text: `message sent, thank you ${values.name.trim()}! i'll reply soon.` });
      setValues({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("contact form:", error);
      setStatus({ type: "error", text: "something went wrong. please try again, or email me directly." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <h2>send a message</h2>
      <p>i usually reply within a couple of days.</p>

      {FIELDS.map((field) => {
        const errorId = `${field.name}-error`;
        const common = {
          id: field.name,
          name: field.name,
          value: values[field.name],
          onChange: handleChange,
          onBlur: handleBlur,
          required: true,
          "aria-invalid": Boolean(errors[field.name]),
          "aria-describedby": errorId,
        };
        return (
          <div key={field.name} className={`field${errors[field.name] ? " has-error" : ""}`}>
            <label htmlFor={field.name}>
              {field.label} <span aria-hidden="true">*</span>
            </label>
            {field.type === "textarea" ? (
              <textarea {...common} rows={6} />
            ) : (
              <input {...common} type={field.type} autoComplete={field.autoComplete} />
            )}
            <p id={errorId} className="field-error">
              {errors[field.name]}
            </p>
          </div>
        );
      })}

      <input type="checkbox" name="botcheck" className="sr-only" tabIndex={-1} aria-hidden="true" />

      <div className="form-foot">
        <button className="btn btn--primary" type="submit" disabled={isSending}>
          {isSending ? (
            <>
              <span className="spinner" aria-hidden="true" /> sending…
            </>
          ) : (
            <>
              send message <Icon name="arrow" />
            </>
          )}
        </button>
        <p className={`form-status${status.type ? ` is-${status.type}` : ""}`} role="status" aria-live="polite">
          {status.text}
        </p>
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <section className="page-hero page-hero--contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">contact</span>
          <SplitTitle id="contact-title" text="hire me!" tag="h1" className="page-title" />
          <p className="lead">
            got a website, a redesign or a little graphics job in mind? fill in the form, or reach me on any of these.
          </p>
          <ul className="contact-list">
            {SOCIALS.map((social, i) => (
              <Reveal as="li" key={social.key} delay={i * 0.05}>
                <a
                  className="contact-link"
                  href={social.href}
                  target={isExternal(social.href) ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  <span className="icon-wrap">
                    <Icon name={social.icon} />
                  </span>
                  <span>
                    <strong>{social.label}</strong>
                    <small>{social.handle}</small>
                  </span>
                  <Icon name="up" />
                </a>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="form-wrap" delay={0.1}>
          <ContactForm />
          <Sparkle style={{ "--size": "28px", top: "-12px", right: "24px" }} />
          <Sparkle style={{ "--size": "16px", top: "22px", right: "-8px", "--c": "var(--sage)", "--d": "1s" }} />
        </Reveal>
      </div>
    </section>
  );
}
