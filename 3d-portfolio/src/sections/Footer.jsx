import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p> | </p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a
          href="https://www.linkedin.com/in/adrien-mery-92a019208/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/linkedin.svg" alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/NOBODIDI"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/github.svg" alt="GitHub" />
        </a>
        <a href="mailto:adrienmeryusa@gmail.com" className="social-icon">
          <img src="/assets/email.svg" alt="Email" />
        </a>
        <a href="tel:+6473829631" className="social-icon">
          <img src="/assets/phone.svg" alt="Phone" />
        </a>
      </div>
      <p className="text-white-500">© 2025 Adrien Mery. All rights reserved.</p>
    </section>
  );
};

export default Footer;
