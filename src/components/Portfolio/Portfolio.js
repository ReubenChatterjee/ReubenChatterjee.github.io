import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Fraud Detection for Credit Card Transactions',
      description: 'Developed a robust fraud detection model for 97,000+ credit card transactions using advanced machine learning techniques like LightGBM, CNN, and XGBoost, achieving 92% accuracy. ',
      image: 'fraud-detection.jpg',
      categories: ['ds', 'da'],
      technologies: ['Python', 'Pytorch', 'XGBoost', 'LightGBM', 'CNN', 'Seaborn'],
      github: 'https://github.com/ReubenChatterjee/credit-card-fraud-detection'
    },
    {
        id: 2,
        title: 'Gender & Group Dynamics in COGS108 | Cognitive Science Dept. at UCSD',
        description: 'Analyzed demographic data from 500+ students to investigate the effects of gender composition on team dynamics in a data science course. Conducted statistical tests (ANOVA) to ensure balanced experimental groupings across demographics like race, first-gen, international status etc. Found statistically significant gender-based differences in programming comfort and created visualizations to support findings.',
        image: 'gender-study.png',
        categories: 'ds',
        technologies: ['R', 'ggplot2', 'ANOVA', 'Wilcoxon Rank Sum test', 'Tukey Stats test', 'Data Wrangling'],
        github: 'https://github.com/ReubenChatterjee/gender_groupwork'
      },
    {
      id: 3,
      title: 'Climate Change Analysis',
      description: 'Built and evaluated a NorESM2 linear regression model to predict global warming based on CO2 emissions from the ClimateBench Dataset, extending the analysis to regional temperature variations by country.',
      image: 'climate-change.jpg',
      categories: 'ds',
      technologies: ['React', 'Firebase', 'Redux', 'Styled Components'],
      github: 'https://github.com/ReubenChatterjee/Climate-Data-Analysis'
    },
    {
      id: 4,
      title: 'Document Summarization Using Latent Semantic Indexing',
      description: 'Implemented a pipeline for extractive text summarization using Latent Semantic Indexing (LSI) and Truncated SVD, comparing its performance with BERTSUM, a transformer-based SOTA model. Applied advanced pre-processing, TF-IDF vectorization, and ROUGE evaluation on a subset of the CNN-DailyMail dataset to generate and assess summaries. Demonstrated the limitations of LSI and the effectiveness of transformer architectures for contextual summarization.',
      image: 'docs.png',
      category: 'fs',
      technologies: ['NLTK', 'BERTSUM', 'Scikit-learn', 'Singular Value Decomposition', 'Latent Semantic Indexing'],
      github: 'https://chocolate-yard-038.notion.site/Document-Summarization-Using-Latent-Semantic-Indexing-eb81fc4925054d54af65571ceb5227e5'
    },
    {
      id: 5,
      title: 'Student Accommodation Service',
      description: 'Designed a mobile application that matches students with compatible roommates using the K-Means clustering algorithm and OCEAN personality model. The app collects lifestyle preferences via a personality questionnaire and clusters users to suggest matches with similar traits. Features include profile browsing, in-app messaging, and landlord–tenant matching.',
      image: 'sas.png',
      category: 'fs',
      technologies: ['Flutter', 'Python', 'MySQL', 'Node.js', 'Unsupervised Learning'],
      github: 'https://github.com/ReubenChatterjee/student-accommodation-app'
    },
    {
        id: 6,
        title: 'Tax Fraud Detection for NYC Properties',
        description: 'Built an anomaly detection pipeline on 1M+ NYC property records to identify potential tax fraud. Engineered 25+ valuation and size ratio features, applied PCA for dimensionality reduction, and used Isolation Forest and Local Outlier Factor to detect irregularities. Flagged high-risk properties and validated anomalies using satellite imagery and statistical deviations.',
        image: 'nyc.webp',
        categories: ['ds', 'da'],
        technologies: ['Python', 'Scikit-learn', 'PCA', 'LOF', 'Isolation Forest', 'Seaborn'],
        github: 'https://github.com/ReubenChatterjee/new-york-tax-fraud-detection'
      }
  ];

  // Comprehensive skills data
  const allSkills = [
    { name: 'SQL', category: 'data' },
    { name: 'Python', category: 'programming' },
    { name: 'R-studio | R GUI', category: 'programming' },
    { name: 'Tableau | PowerBI', category: 'visualization' },
    { name: 'Excel', category: 'data' },
    { name: 'Seaborn | Matplotlib', category: 'data' },
    { name: 'Pandas | Numpy', category: 'data' },
    { name: 'scikit-learn', category: 'data' },
    { name: 'Spark', category: 'data' },
    { name: 'Hadoop', category: 'data' },
    { name: 'Tensorflow', category: 'ML' },
    { name: 'Pytorch', category: 'ML' },
    { name: 'Keras', category: 'ML' },
    { name: 'XGBoost', category: 'ML' },
    { name: 'Decision Trees', category: 'ML' },
    { name: 'Neural Networks', category: 'ML' },
    { name: 'Feature Engineering', category: 'ML' },
    { name: 'React', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'HTML5', category: 'frontend' },
    { name: 'CSS3', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'MongoDB', category: 'database' },
    { name: 'Express', category: 'backend' },
    { name: 'Firebase', category: 'backend' },
    { name: 'Redux', category: 'frontend' },
    { name: 'Git', category: 'tools' },
    { name: 'Bash', category: 'tools' },
    { name: 'AWS', category: 'tools' },
    { name: 'PostgreSQL', category: 'tools' },
    { name: 'PowerBI', category: 'tools' },
    { name: 'Jupyter', category: 'tools' },
    { name: 'G-suite', category: 'tools' },
    { name: 'MS Office', category: 'tools' },
    { name: 'Adobe Premiere Pro', category: 'tools' },
    { name: 'Blender 3D', category: 'tools' },
    
    
  ];

  const [filter, setFilter] = useState('all');
  
  // State to track if we need to scroll to the skills section
  const [scrollToSkills, setScrollToSkills] = useState(false);
  
  useEffect(() => {
    // Check if URL has the #skills hash
    if (window.location.hash === '#skills') {
      setScrollToSkills(true);
    }
  }, []);
  
  useEffect(() => {
    // Scroll to the skills section if needed
    if (scrollToSkills) {
      const skillsSection = document.getElementById('skills-section');
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
        setScrollToSkills(false);
      }
    }
  }, [scrollToSkills]);

  const filteredProjects = filter === 'all' 
  ? projects 
  : projects.filter(project => {
      // Handle both formats (backward compatibility)
      if (project.categories) {
        return project.categories.includes(filter);
      } else if (project.category) {
        return project.category === filter;
      }
      return false;
    });

  return (
    <motion.div 
      className="portfolio-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h2>My Portfolio</h2>
      </motion.div>

      <motion.div 
        className="filter-buttons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'ds' ? 'active' : ''} 
          onClick={() => setFilter('ds')}
        >
          Data Science
        </button>
        <button 
          className={filter === 'da' ? 'active' : ''} 
          onClick={() => setFilter('da')}
        >
          Data Analytics
        </button>

        <button 
          className={filter === 'fs' ? 'active' : ''} 
          onClick={() => setFilter('fs')}
        >
          Full Stack
        </button>
      </motion.div>

      <motion.div 
        className="projects-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="project-item"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * (index + 3) }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div
                className="project-image"
                style={{ 
                    backgroundImage: `url(/images/${project.image})`
                    }}
                ></div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="view-project">View on Github

                </a>
                </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* NEW: Skills Section */}
      <motion.div 
        id="skills-section"
        className="skills-section-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2>My Complete Skill Set</h2>
        </motion.div>
        
        <motion.div 
          className="skills-categories"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="skills-category">
            <h3>Data Science & Analytics</h3>
            <div className="skills-grid">
              {allSkills
                .filter(skill => skill.category === 'data' || skill.category === 'programming' || skill.category === 'visualization')
                .map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill.name}
                  </div>
                ))
              }
            </div>
          </div>

          <div className="skills-category">
            <h3>Machine Learning</h3>
            <div className="skills-grid">
              {allSkills
                .filter(skill => skill.category === 'ML')
                .map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill.name}
                  </div>
                ))
              }
            </div>
          </div>

          <div className="skills-category">
            <h3>Other Tools</h3>
            <div className="skills-grid">
              {allSkills
                .filter(skill => skill.category === 'tools' || skill.category === 'design')
                .map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill.name}
                  </div>
                ))
              }
            </div>
          </div>          
          
          <div className="skills-category">
            <h3>Frontend</h3>
            <div className="skills-grid">
              {allSkills
                .filter(skill => skill.category === 'frontend')
                .map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill.name}
                  </div>
                ))
              }
            </div>
          </div>
          
          <div className="skills-category">
            <h3>Backend</h3>
            <div className="skills-grid">
              {allSkills
                .filter(skill => skill.category === 'backend' || skill.category === 'database')
                .map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill.name}
                  </div>
                ))
              }
            </div>
          </div>
          
        
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;