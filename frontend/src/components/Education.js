import React from 'react';

const EDUCATION = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Anna University",
    period: "2021 - 2025",
    location: "Tamil Nadu, India",
    status: "In Progress",
    gpa: "8.5/10",
    description: "Focused on software engineering, data structures, algorithms, and web development.",
    coursework: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Management Systems",
      "Web Technologies",
      "Mobile Application Development",
      "Computer Networks"
    ],
    projects: [
      "Inventory Management System (Final Year Project)",
      "Chat Application with Real-time Features",
      "E-commerce Web Application"
    ]
  },
  {
    degree: "Higher Secondary Education",
    institution: "Government Higher Secondary School",
    period: "2019 - 2021",
    location: "Salem, Tamil Nadu",
    status: "Completed",
    percentage: "92%",
    description: "Completed with Computer Science as major subject.",
    subjects: [
      "Computer Science",
      "Mathematics",
      "Physics",
      "Chemistry",
      "English"
    ]
  }
];

const CERTIFICATIONS = [
  {
    title: "React Developer Certification",
    issuer: "Meta (Facebook)",
    date: "2023",
    credential: "ABC123XYZ"
  },
  {
    title: "Full Stack Web Development",
    issuer: "FreeCodeCamp",
    date: "2023",
    credential: "DEF456ABC"
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Google",
    date: "2022",
    credential: "GHI789DEF"
  }
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">My academic background and professional certifications</p>
        </div>
        
        <div className="education-content">
          {/* Education */}
          <div className="education-group">
            <h3 className="group-title">Education</h3>
            <div className="education-list">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="education-card">
                  <div className="education-header">
                    <div className="education-title-group">
                      <h4 className="education-degree">{edu.degree}</h4>
                      <span className={`education-status ${edu.status.toLowerCase().replace(' ', '-')}`}>
                        {edu.status}
                      </span>
                    </div>
                    <div className="education-meta">
                      <span className="institution">{edu.institution}</span>
                      <span className="period">{edu.period}</span>
                      <span className="location">{edu.location}</span>
                    </div>
                    {edu.gpa && (
                      <div className="education-grade">
                        <span className="grade-label">CGPA:</span>
                        <span className="grade-value">{edu.gpa}</span>
                      </div>
                    )}
                    {edu.percentage && (
                      <div className="education-grade">
                        <span className="grade-label">Percentage:</span>
                        <span className="grade-value">{edu.percentage}</span>
                      </div>
                    )}
                  </div>
                  <p className="education-description">{edu.description}</p>
                  
                  {edu.coursework && (
                    <div className="coursework">
                      <h5>Relevant Coursework:</h5>
                      <div className="coursework-list">
                        {edu.coursework.map((course, courseIndex) => (
                          <span key={courseIndex} className="course-tag">{course}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {edu.subjects && (
                    <div className="subjects">
                      <h5>Major Subjects:</h5>
                      <div className="subjects-list">
                        {edu.subjects.map((subject, subjectIndex) => (
                          <span key={subjectIndex} className="subject-tag">{subject}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {edu.projects && (
                    <div className="academic-projects">
                      <h5>Academic Projects:</h5>
                      <ul>
                        {edu.projects.map((project, projectIndex) => (
                          <li key={projectIndex}>{project}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="certifications-group">
            <h3 className="group-title">Certifications</h3>
            <div className="certifications-grid">
              {CERTIFICATIONS.map((cert, index) => (
                <div key={index} className="certification-card">
                  <h4 className="cert-title">{cert.title}</h4>
                  <div className="cert-meta">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                  <div className="cert-credential">
                    <span className="credential-label">Credential ID:</span>
                    <span className="credential-id">{cert.credential}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}