import React from 'react';
import { Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="hero container">
      <div className="hero-bg-glow"></div>
      <div className="hero-content">
        <div className="hero-text animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            border: '1px solid rgba(6, 182, 212, 0.3)', 
            padding: '6px 16px', 
            borderRadius: '30px', 
            marginBottom: '2rem',
            background: 'rgba(6, 182, 212, 0.05)'
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#06b6d4', boxShadow: '0 0 8px #06b6d4' }}></div>
            <span style={{ color: '#06b6d4', fontSize: '0.85rem', fontWeight: '500' }}>Open to AI Engineer Roles</span>
          </div>

          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem', lineHeight: '1.2' }}>
            Pallavi <span style={{ color: '#06b6d4' }}>Sindkar</span>
          </h1>
          
          <h2 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', fontWeight: 500, letterSpacing: '0.5px' }}>
            AI/ML Engineer &middot; GenAI Developer &middot; RAG &middot; LangChain &middot; FastAPI &middot; AWS
          </h2>
          
          <p style={{ maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: '1.6', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            Building production-grade AI systems — from advanced RAG pipelines and multi-agent orchestrations to predictive machine learning models.
          </p>
          
          <div className="hero-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
            <a href="#projects" className="btn-cyan" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              View Projects
            </a>
            <a href="https://github.com/Pallavi-S-02" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaGithub size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/pallavi-sindkar-83b583203/" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaLinkedin size={18} /> LinkedIn
            </a>
          </div>

          <div style={{ display: 'flex', gap: '4rem', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#06b6d4', marginBottom: '0.5rem' }}>4</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Projects Shipped</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#06b6d4', marginBottom: '0.5rem' }}>1</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>YouTube Live Demo</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
