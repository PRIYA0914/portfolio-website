# Portfolio Website

This is a portfolio website built with React, showcasing various components that highlight skills, projects, education, and experience. The website also features a 3D-enhanced navigation bar for an engaging user experience.

## Project Structure

```
portfolio-website
├── src
│   ├── index.js          # Entry point of the React application
│   ├── App.js            # Main application component with routing
│   ├── components         # Contains all React components
│   │   ├── Navbar.js     # Standard navigation bar component
│   │   ├── Navbar3D.js   # Enhanced navigation bar with 3D effects
│   │   ├── Header.js     # Header component for branding
│   │   ├── Hero.js       # Hero section component
│   │   ├── Skills.js     # Skills showcase component
│   │   ├── Projects.js    # Projects display component
│   │   ├── Education.js   # Education background component
│   │   ├── Experience.js   # Work experience component
│   │   └── Contact.js     # Contact form component
│   ├── three             # Contains 3D related components
│   │   ├── Logo.js       # 3D logo component
│   │   └── NavbarEffect.js # Logic for 3D effects on Navbar
│   ├── styles            # CSS styles for the application
│   │   └── main.css      # Main stylesheet
│   └── utils             # Utility functions
│       └── threeHelpers.js # Helper functions for three.js
├── public
│   └── index.html        # Main HTML file for the application
├── package.json          # npm configuration file
├── .gitignore            # Git ignore file
└── README.md             # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd portfolio-website
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm start
```
This will launch the application in your default web browser at `http://localhost:3000`.

## Features

- Responsive design
- 3D effects in the navigation bar
- Sections for skills, projects, education, experience, and contact

## Technologies Used

- React
- React Router
- Three.js (for 3D effects)
- CSS

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.