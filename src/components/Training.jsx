import React from 'react';

const Training = () => {
  return (
    <section id="training" className="section container" style={{ paddingTop: '0', marginTop: '-2rem' }}>
      <div 
        className="glass-panel" 
        style={{ 
          padding: '2rem 2.5rem', 
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(255,255,255,0.02)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: '600' }}>
            Advanced Training
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Present
          </span>
        </div>
        
        <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', margin: '0', fontWeight: '600' }}>
          Agentic AI Systems
        </h3>
        
        <p style={{ color: 'var(--text-secondary)', margin: '0', fontSize: '0.95rem' }}>
          Python &middot; LLMs &middot; LangGraph &middot; RAG &middot; Prompt Engineering &middot; MLOps
        </p>
      </div>
    </section>
  );
};

export default Training;
