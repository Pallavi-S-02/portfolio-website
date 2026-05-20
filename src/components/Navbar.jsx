import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}>
          <div style={{ background: '#06b6d4', color: '#000', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem' }}>P</div>
          <span style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '600', letterSpacing: '0.5px' }}>Pallavi Sindkar</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="mailto:pallavi.sindkar02@gmail.com">Contact</a>
          <a href="mailto:pallavi.sindkar02@gmail.com" className="btn-outline hire-me-btn">Hire Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
