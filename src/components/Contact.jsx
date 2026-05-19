import React from 'react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section container" style={{ textAlign: 'center', paddingBottom: '6rem' }}>
      <p style={{ color: '#06b6d4', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
        Contact
      </p>
      
      <h2 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#fff', lineHeight: '1.2' }}>
        Open to AI Engineer Roles
      </h2>
      
      <p style={{ color: '#9ca3af', maxWidth: '700px', margin: '0 auto 4rem', lineHeight: '1.6', fontSize: '1.05rem' }}>
        Actively looking for AI/ML Engineer, GenAI Developer, and R&D Engineer roles in India or remote. Have a role or want to discuss a project? Reach out.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '1.5rem', 
        maxWidth: '850px', 
        margin: '0 auto 4rem' 
      }}>
        
        {/* Email Card */}
        <a href="mailto:pallavi.sindkar02@gmail.com" className="contact-card glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.2rem', textDecoration: 'none', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', textAlign: 'left', transition: 'all 0.3s ease' }}>
          <div style={{ color: '#9ca3af' }}><Mail size={24} /></div>
          <div>
            <div style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '0.2rem' }}>Email</div>
            <div style={{ color: '#fff', fontSize: '1rem', fontWeight: '500' }}>pallavi.sindkar02@gmail.com</div>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a href="https://www.linkedin.com/in/pallavi-sindkar-83b583203/" target="_blank" rel="noopener noreferrer" className="contact-card glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.2rem', textDecoration: 'none', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', textAlign: 'left', transition: 'all 0.3s ease' }}>
          <div style={{ color: '#9ca3af' }}><FaLinkedin size={24} /></div>
          <div>
            <div style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '0.2rem' }}>LinkedIn</div>
            <div style={{ color: '#fff', fontSize: '1rem', fontWeight: '500' }}>pallavi-sindkar-83b583203</div>
          </div>
        </a>

        {/* GitHub Card */}
        <a href="https://github.com/Pallavi-S-02" target="_blank" rel="noopener noreferrer" className="contact-card glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.2rem', textDecoration: 'none', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', textAlign: 'left', transition: 'all 0.3s ease' }}>
          <div style={{ color: '#9ca3af' }}><FaGithub size={24} /></div>
          <div>
            <div style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '0.2rem' }}>GitHub</div>
            <div style={{ color: '#fff', fontSize: '1rem', fontWeight: '500' }}>Pallavi-S-02</div>
          </div>
        </a>

        {/* Location Card */}
        <div className="contact-card glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', textAlign: 'left', transition: 'all 0.3s ease' }}>
          <div style={{ color: '#9ca3af' }}><MapPin size={24} /></div>
          <div>
            <div style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '0.2rem' }}>Location</div>
            <div style={{ color: '#fff', fontSize: '1rem', fontWeight: '500' }}>Bengaluru, India</div>
          </div>
        </div>

      </div>

      <a href="mailto:pallavi.sindkar02@gmail.com" className="btn-cyan" style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '0.8rem', 
        fontSize: '1.1rem', 
        padding: '1rem 2.5rem', 
        borderRadius: '30px', 
        fontWeight: '600' 
      }}>
        Send Email <ArrowRight size={20} />
      </a>

      <style>{`
        .contact-card:hover {
          border-color: rgba(255, 255, 255, 0.15) !important;
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.05) !important;
        }
      `}</style>
    </section>
  );
};

export default Contact;
