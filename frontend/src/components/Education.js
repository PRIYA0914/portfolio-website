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
  
  }
];



const EDU_ICON = <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="5" fill="#2563eb"/><rect x="7" y="11" width="10" height="2" rx="1" fill="#fff"/></svg>;
// const CERT_ICON removed (no longer needed)

export default function Education() {
  return (
    <section id="education" className="education-section card">
      <div className="section-header">
        <span className="education-icon" title="Education & Certifications">{EDU_ICON}</span>
        <h2 className="section-title">Education & Certifications</h2>
        <p className="section-subtitle">My academic background and professional certifications</p>
      </div>
      <div className="education-content">
        {/* Education */}
        <div className="education-group">
          <h3 className="group-title"><span className="group-icon">{EDU_ICON}</span> Education</h3>
          <div className="education-list">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="education-card card">
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
                  <div className="projects">
                    <h5>Projects:</h5>
                    <ul className="projects-list">
                      {edu.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="project-item">{project}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}