import React from 'react';

const About = () => {
  return (
    <section id="about" className="section container">
      <div className="about-container">
        
        {/* Left Column */}
        <div className="about-left">
          <p className="about-subtitle">ABOUT ME</p>
          <h2 className="about-title">
            Building AI systems that <span className="highlight-cyan">actually ship</span>
          </h2>
          
          <div className="about-text-content">
            <p>
              I'm an AI Engineer with a strong Computer Science Engineering background who is deeply passionate about production AI — and I've shipped end-to-end projects to prove it.
            </p>
            
            <p>
              I specialize in <strong>Retrieval-Augmented Generation</strong>, <strong>agentic AI systems</strong>, and <strong>MLOps pipeline development</strong>. My work spans the full stack — from designing multi-agent orchestrators like MedAssist AI to deploying robust machine learning pipelines on AWS and GCP.
            </p>
            
            <p>
              My engineering training gives me a methodical approach to system design: correctness first, then scale. I write production Python, not just notebooks.
            </p>
          </div>
          
          <div className="about-actions">
            <a href="mailto:pallavi.sindkar02@gmail.com" className="btn btn-cyan">Get In Touch</a>
            <a href="https://www.linkedin.com/in/pallavi-sindkar-83b583203/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn Profile</a>
          </div>
        </div>

        {/* Right Column */}
        <div className="about-right">
          <div className="about-grid">
            
            <div className="about-card glass-panel">
              <div className="about-icon">🧠</div>
              <h4>AI/ML Specialization</h4>
              <p>GenAI, RAG, agentic architectures, and production ML systems</p>
            </div>
            
            <div className="about-card glass-panel">
              <div className="about-icon">⚙️</div>
              <h4>Full-Stack AI</h4>
              <p>End-to-end: FastAPI backends, Docker, AWS & GCP deployments</p>
            </div>
            
            <div className="about-card glass-panel">
              <div className="about-icon">💻</div>
              <h4>Computer Science</h4>
              <p>B.Tech with 9.38 CGPA — brings deep engineering rigor to AI problem-solving</p>
            </div>
            
            <div className="about-card glass-panel">
              <div className="about-icon">🚀</div>
              <h4>Shipping Fast</h4>
              <p>Proven track record of delivering production-grade AI projects</p>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
