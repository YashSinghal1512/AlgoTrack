import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p className="footer-text">© {new Date().getFullYear()} AlgoTrack. All rights reserved.</p>
        <p className="footer-text">
          Follow us on 
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FYashSingha1837" target="_blank" rel="noopener noreferrer" className="footer-link"> Twitter</a>, 
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link"> Facebook</a>, and 
          <a href="https://www.linkedin.com/in/yash-singhal-a8834a25a/" target="_blank" rel="noopener noreferrer" className="footer-link"> LinkedIn</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
