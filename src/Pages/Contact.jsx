import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <section id="contact">
      {/* <h2>Get in Touch</h2>
      <p>Have a question, want to work together, or just want to say hi? Feel free to reach out!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send</button>
      </form> */}

      <div className="contact-details">
        <p>Email: <a href="mailto:geethuramesh2.de@gmail.com">geethuramesh2.de@gmail.com</a></p>
        <p>Phone: <a href="tel:+4917671662908">+49 176 7166 2908</a></p>
        <p>Location: Berlin, Germany</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/geethu-pandath-ramesh-078288174" target="_blank" rel="noopener noreferrer">linkedin.com/in/geethu-pandath-ramesh</a></p>
        <p>GitHub: <a href="https://github.com/geethusayooj" target="_blank" rel="noopener noreferrer">github.com/geethusayooj</a></p>
      </div>
    </section>
  );
};

export default Contact;
