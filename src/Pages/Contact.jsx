import React from 'react';
import './Contact.css';

const contactItems = [
  {
    label: "Email",
    value: "geethuramesh2.de@gmail.com",
    href: "mailto:geethuramesh2.de@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+49 176 7166 2908",
    href: "tel:+4917671662908",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Berlin, Germany",
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/geethu-pandath-ramesh",
    href: "https://www.linkedin.com/in/geethu-pandath-ramesh-078288174",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/geethusayooj",
    href: "https://github.com/geethusayooj",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label">Let's connect</p>
        <h2 className="section-title">Contact</h2>

        <div className="contact-layout">
          <div className="contact-left">
            <div className="contact-cta-blob" />
            <h3 className="contact-cta-heading">Let's Work Together</h3>
            <p className="contact-cta-text">
              I'm open to new opportunities, collaborations, or just a friendly chat.
              Whether you have a project in mind or want to connect — my inbox is always open.
            </p>
            <div className="contact-availability">
              <span className="availability-dot" />
              Available for new roles
            </div>
          </div>

          <div className="contact-list">
            {contactItems.map((item) => (
              <div key={item.label} className="contact-card">
                <div className="contact-icon-box">
                  {item.icon}
                </div>
                <div className="contact-info">
                  <span className="contact-label">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="contact-value"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-value contact-value-plain">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
