import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formFocused, setFormFocused] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (name) => {
    setFormFocused((prev) => ({ ...prev, [name]: true }));
  };

  const handleBlur = (name) => {
    if (formData[name] === '') {
      setFormFocused((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitStatus('sending');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      reply_to: formData.email,
      user_name: formData.name,
      user_email: formData.email,
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'New contact request',
      message: formData.message
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormFocused({ name: false, email: false, subject: false, message: false });

        setTimeout(() => {
          setSubmitStatus('idle');
        }, 4000);
      })
      .catch(() => {
        setSubmitStatus('error');

        setTimeout(() => {
          setSubmitStatus('idle');
        }, 4000);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          <span>Get In Touch</span> Contact Me
        </h2>

        <div className="contact-grid">
          {/* Left Side: Contact Cards / Info */}
          <div className="contact-info">
            <h3 className="contact-info-heading">Let's build something <br /><span className="text-gradient">epic together</span></h3>
            <p className="contact-info-text">
              Have an idea, need a dedicated developer for your team, or want to discuss project collaborations? Shoot me a message, and let's make it happen.
            </p>

            <div className="contact-cards">
              {/* Email Card */}
              <div className="contact-info-card glass-card">
                <div className="card-icon-wrapper cyan-glow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="info-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.25a3 3 0 00-3-3h-13.5a3 3 0 00-3 3v9a3 3 0 003 3h13.5a3 3 0 003-3v-9zM3.75 7.5l8.25 5.25 8.25-5.25" />
                  </svg>
                </div>
                <div className="card-details">
                  <span className="card-lbl">Email Me</span>
                  <a href="mailto:raju.chawale@email.com" className="card-val">kunalgautam0076@email.com</a>
                </div>
              </div>

              {/* Location Card */}
              <div className="contact-info-card glass-card">
                <div className="card-icon-wrapper purple-glow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="info-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="card-details">
                  <span className="card-lbl">My Location</span>
                  <span className="card-val">Nagpur, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links-container">
              <span className="social-links-title">Connect on Socials</span>
              <div className="social-icons">
                {['Github', 'Linkedin', 'Twitter', 'Dribbble'].map((platform) => (
                  <a key={platform} href="#" className="social-icon-btn glass-card" aria-label={`Follow on ${platform}`}>
                    <span>{platform.substring(0, 2)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-container glass-card">
            {submitStatus === 'success' ? (
              <div className="success-overlay">
                <div className="success-checkmark-wrapper">
                  <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                    <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                  </svg>
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out, Raju will get back to you shortly.</p>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="error-overlay">
                <div className="error-icon-wrapper">
                  <span>!</span>
                </div>
                <h3>Unable to Send Message</h3>
                <p>Something went wrong. Please try again or email directly at kunalgautam0076@email.com.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {/* Name */}
                <div className={`input-group ${formFocused.name || formData.name ? 'focused' : ''}`}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                  />
                </div>

                {/* Email */}
                <div className={`input-group ${formFocused.email || formData.email ? 'focused' : ''}`}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                  />
                </div>

                {/* Subject */}
                <div className={`input-group ${formFocused.subject || formData.subject ? 'focused' : ''}`}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={() => handleBlur('subject')}
                  />
                </div>

                {/* Message */}
                <div className={`input-group textarea-group ${formFocused.message || formData.message ? 'focused' : ''}`}>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary form-submit-btn" 
                  disabled={submitStatus === 'sending'}
                >
                  {submitStatus === 'sending' ? (
                    <span className="spinner"></span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="btn-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
