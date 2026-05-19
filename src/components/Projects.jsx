import React from 'react';
import { ExternalLink, PlayCircle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "MedAssist AI",
    subtitle: "AI Medical Assistant Platform",
    date: "2023",
    description: "Built a LangGraph orchestrator with GPT-4o to route tasks across 7 specialized AI agents. Includes a Vision Agent for OCR on lab reports, a low-latency Voice Agent with sub-second responses, and a Symptom Analyst Agent.",
    tech: ["LangGraph", "GPT-4o", "RAG", "Pinecone", "Docker", "GCP", "WebSockets"],
    demoLink: "https://www.youtube.com/watch?v=yaym9KqjYIA",
    codeLink: "https://github.com/Pallavi-S-02",
    featured: true
  },
  {
    title: "Anomaly Detection",
    subtitle: "Telecom KPI Monitoring System",
    date: "2023",
    description: "Designed an unsupervised anomaly detection pipeline for telecom KPI monitoring using Isolation Forest. Built robust time-series preprocessing and integrated results into InfluxDB for real-time visualization.",
    tech: ["Isolation Forest", "Time-Series", "InfluxDB", "Grafana", "Python"],
    demoLink: "#",
    codeLink: "https://github.com/Pallavi-S-02",
    featured: true
  },
  {
    title: "News Research Tool",
    subtitle: "AI-Powered Semantic Search Engine",
    date: "2023",
    description: "An AI-powered tool that extracts insights from news articles. Built with LLaMA3-70b and Google Embeddings for semantic search, utilizing FAISS for efficient similarity retrieval and LangChain for orchestration.",
    tech: ["LLaMA3-70b", "Google Embeddings", "FAISS", "LangChain", "Streamlit", "Python"],
    demoLink: "https://news-research-tool.streamlit.app/",
    codeLink: "https://github.com/Pallavi-S-02/News-Research-Tool",
    featured: false
  },
  {
    title: "Personalized Chatbot",
    subtitle: "Intelligent AI Assistant",
    date: "2023",
    description: "Designed a personalized chatbot leveraging Gemini Pro LLM. Utilized Google Embeddings and BM25 RAG Ensemble for enhanced context retrieval, with ChromaDB for storage and Streamlit for the UI.",
    tech: ["Gemini Pro", "RAG", "ChromaDB", "Streamlit"],
    demoLink: "#",
    codeLink: "https://github.com/Pallavi-S-02",
    featured: false
  },
  {
    title: "Network Security System",
    subtitle: "End-to-End MLOps Pipeline",
    date: "2023",
    description: "Developed an end-to-end MLOps pipeline for phishing URL detection. Trained models with GridSearchCV, implemented tracking via MLflow, managed datasets via DagsHub, and deployed models via FastAPI.",
    tech: ["MLOps", "MLflow", "DagsHub", "FastAPI", "Random Forest"],
    demoLink: "#",
    codeLink: "https://github.com/Pallavi-S-02",
    featured: false
  },
  {
    title: "Invoice Management",
    subtitle: "B2B Payment Date Predictor",
    date: "2022",
    description: "Built a machine learning system for B2B invoice management to predict payment dates using client credit and payment history. Implemented and compared Linear Regression, Decision Tree, Random Forest, and XGBoost models.",
    tech: ["Machine Learning", "Python", "XGBoost", "Random Forest", "Scikit-Learn"],
    demoLink: "#",
    codeLink: "https://github.com/Pallavi-S-02",
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <h2 className="section-title gradient-text">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card glass-panel"
            style={{ 
              padding: '1.8rem', 
              borderRadius: '16px',
              border: project.featured ? '1px solid rgba(6, 182, 212, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: project.featured ? '0 0 20px rgba(6, 182, 212, 0.1)' : 'none',
              background: 'rgba(255, 255, 255, 0.02)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#fff', margin: 0, fontWeight: '600' }}>
                {project.title}
              </h3>
              {project.featured && (
                <span style={{ 
                  background: 'rgba(6, 182, 212, 0.1)', 
                  color: '#06b6d4', 
                  padding: '4px 10px', 
                  borderRadius: '12px', 
                  fontSize: '0.7rem', 
                  fontWeight: '600',
                  letterSpacing: '0.5px'
                }}>
                  Featured
                </span>
              )}
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{project.subtitle}</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{project.date}</span>
            </div>
            
            <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 1.5rem 0', flex: 1 }}>
              {project.description}
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {project.tech.map((tech, i) => (
                <span 
                  key={i} 
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.04)', 
                    border: '1px solid rgba(255, 255, 255, 0.08)', 
                    color: '#9ca3af', 
                    padding: '4px 10px', 
                    borderRadius: '6px', 
                    fontSize: '0.75rem' 
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1.2rem' }}>
              <a 
                href={project.codeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#9ca3af', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseOver={(e) => e.target.style.color = '#fff'}
                onMouseOut={(e) => e.target.style.color = '#9ca3af'}
              >
                <FaGithub size={16} /> GitHub
              </a>
              {project.demoLink !== "#" && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#06b6d4', fontSize: '0.9rem', textDecoration: 'none', fontWeight: '500', transition: 'text-shadow 0.2s' }}
                  onMouseOver={(e) => e.target.style.textShadow = '0 0 8px rgba(6, 182, 212, 0.5)'}
                  onMouseOut={(e) => e.target.style.textShadow = 'none'}
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
