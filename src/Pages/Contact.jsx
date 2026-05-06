import React from 'react';
import './Contact.css';

const contactItems = [
  {
    label: "Email",
    value: "geethuramesh2.de@gmail.com",
    href: "mailto:geethuramesh2.de@gmail.com",
    icon: "✉️",
  },
  {
    label: "Phone",
    value: "+49 176 7166 2908",
    href: "tel:+4917671662908",
    icon: "📞",
  },
  {
    label: "Location",
    value: "Berlin, Germany",
    href: null,
    icon: "📍",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/geethu-pandath-ramesh-078288174",
    href: "https://www.linkedin.com/in/geethu-pandath-ramesh-078288174",
    icon: "💼",
  },
  {
    label: "GitHub",
    value: "github.com/geethusayooj",
    href: "https://github.com/geethusayooj",
    icon: "🐙",
  },
];

const Contact = () => {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label">Let's connect</p>
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          I'm open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
        </p>

        <div className="contact-grid">
          {contactItems.map((item) => (
            <div key={item.label} className="contact-card">
              <span className="contact-icon">{item.icon}</span>
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
    </section>
  );
};

export default Contact;
