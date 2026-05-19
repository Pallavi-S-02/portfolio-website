import React from 'react';

const experiences = [
  {
    role: "R&D Engineer",
    company: "CommScope",
    period: "August 2023 – Present",
    location: "Bengaluru, India",
    color: "#06b6d4",
    bg: "rgba(6, 182, 212, 0.1)",
    details: [
      "Designed and implemented an unsupervised anomaly detection pipeline for telecom KPI monitoring using Isolation Forest.",
      "Built time-series preprocessing and feature engineering pipelines, and tuned anomaly detection models across 4G/5G KPIs.",
      "Worked on a Kubernetes-based microservices architecture for end-to-end OM ingestion, KPI calculation, and visualization.",
      "Contributed to Conveyor Django service, exposing REST APIs via gRPC to manage 4G/5G device metadata with MariaDB and Memcached.",
      "Built and maintained a reporting framework, enabling stakeholders to analyze operator-specific performance."
    ]
  },
  {
    role: "Software Development Intern",
    company: "CommScope",
    period: "August 2022 – July 2023",
    location: "Bengaluru, India",
    color: "#3b82f6",
    bg: "rgba(59, 130, 246, 0.1)",
    details: [
      "Worked on a cloud-based data pipeline for 4G/5G OM ingestion and KPI computation using AWS (S3, Lambda, Kinesis).",
      "Supported KPI analytics using InfluxDB (Flux) and built Grafana dashboards for monitoring and automated reporting."
    ]
  },
  {
    role: "Machine Learning Intern",
    company: "HighRadius",
    period: "Jan 2022 – April 2022",
    location: "Hyderabad, India",
    color: "#a855f7",
    bg: "rgba(168, 85, 247, 0.1)",
    details: [
      "Built a machine learning system for B2B invoice management to predict payment dates using client credit and payment history.",
      "Implemented & compared Linear Regression, Decision Tree, Random Forest & XGBoost models, delivering data-driven insights."
    ]
  },
  {
    role: "Mentee",
    company: "Amazon ML Summer School",
    period: "2022",
    location: "Remote",
    color: "#10b981",
    bg: "rgba(16, 185, 129, 0.1)",
    details: [
      "Selected as a mentee for the prestigious Amazon ML Summer School 2022.",
      "Gained in-depth knowledge on advanced Machine Learning concepts, applied ML, and best practices directly from Amazon scientists."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section container">
      <h2 className="section-title gradient-text">Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div 
              className="timeline-dot" 
              style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}` }}
            ></div>
            <div className="timeline-date" style={{ color: exp.color, fontWeight: '700', letterSpacing: '1px' }}>
              {exp.period} | {exp.location}
            </div>
            <div 
              className="timeline-content glass-panel" 
              style={{ 
                borderLeft: `4px solid ${exp.color}`, 
                background: 'rgba(255,255,255,0.02)',
                boxShadow: `0 4px 20px ${exp.bg}`
              }}
            >
              <h3 style={{ color: exp.color, marginBottom: '0.25rem', fontSize: '1.4rem' }}>{exp.role}</h3>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.2rem', fontSize: '1.1rem', fontWeight: '500' }}>{exp.company}</h4>
              <ul style={{ paddingLeft: '1.2rem' }}>
                {exp.details.map((detail, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', lineHeight: '1.6' }}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
