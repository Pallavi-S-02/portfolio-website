import React from 'react';

const skillCategories = [
  {
    title: "AI & Generative AI",
    color: "#a855f7", // purple
    bg: "rgba(168, 85, 247, 0.1)",
    skills: [
      "LLMs", "RAG", "Agentic AI", "Prompt Engineering", "LoRA / QLoRA", "Embeddings",
      "Vector Search", "LangChain", "LangGraph", "CrewAI", "GPT-4o", "Google Gemini",
      "FAISS", "ChromaDB", "Qdrant", "Pinecone", "OpenSearch"
    ]
  },
  {
    title: "Machine Learning",
    color: "#3b82f6", // blue
    bg: "rgba(59, 130, 246, 0.1)",
    skills: [
      "Supervised Learning", "Unsupervised Learning", "Classification", "Regression",
      "Linear Regression", "Logistic Regression", "Decision Trees", "Random Forest",
      "KNN", "XGBoost", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"
    ]
  },
  {
    title: "Frameworks & APIs",
    color: "#10b981", // emerald
    bg: "rgba(16, 185, 129, 0.1)",
    skills: ["FastAPI", "Flask", "Django", "Streamlit"]
  },
  {
    title: "Databases & Caching",
    color: "#f59e0b", // amber
    bg: "rgba(245, 158, 11, 0.1)",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Memcached", "Supabase", "InfluxDB"]
  },
  {
    title: "DevOps & Cloud",
    color: "#ef4444", // red
    bg: "rgba(239, 68, 68, 0.1)",
    skills: [
      "Docker", "Docker Compose", "Kubernetes", "Microservices", 
      "AWS S3", "AWS OpenSearch", "Git", "GitHub", "Celery"
    ]
  },
  {
    title: "MLOps",
    color: "#6366f1", // indigo
    bg: "rgba(99, 102, 241, 0.1)",
    skills: ["MLflow", "DVC", "DagsHub", "Experiment Tracking", "Model Versioning"]
  },
  {
    title: "Languages",
    color: "#14b8a6", // teal
    bg: "rgba(20, 184, 166, 0.1)",
    skills: ["Python"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section container">
      <h2 className="section-title gradient-text">Technical Expertise</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="skill-category glass-panel"
            style={{ 
              borderColor: category.bg,
              boxShadow: `0 4px 20px ${category.bg}`
            }}
          >
            <h3 
              className="skill-category-title"
              style={{ color: category.color, borderBottomColor: category.bg }}
            >
              {category.title}
            </h3>
            <div className="skill-list">
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="skill-tag"
                  style={{
                    backgroundColor: category.bg,
                    borderColor: category.color,
                    color: category.color
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
