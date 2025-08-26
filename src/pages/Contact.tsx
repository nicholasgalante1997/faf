import React, { memo } from "react";
import ReactMarkdown from "react-markdown";
import { useForm, ValidationError } from "@formspree/react";
import { contactContent } from "../content/contact";

function ContactForm() {
  const [state, handleSubmit] = useForm("xjkevkqj");
  if (state.succeeded) {
    return <p>Thanks for reaching out! We'll get back to you soon.</p>;
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <select id="subject" name="subject" required>
          <option value="">Select a topic</option>
          <option value="general">General Inquiry</option>
          <option value="volunteer">Volunteer Opportunities</option>
          <option value="donations">Donations & Giving</option>
          <option value="programs">Program Information</option>
          <option value="partnership">Corporate Partnership</option>
          <option value="media">Media & Press</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={6} required></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
}

function Contact() {
  return (
    <div className="page contact-page">
      <div className="container">
        <ReactMarkdown>{contactContent}</ReactMarkdown>

        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <div className="contact-form-placeholder">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Contact);
