import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import SuccessGateway from './components/SuccessGateway';
import EducationProcess from './components/EducationProcess';
import StudentSupport from './components/StudentSupport';
import InterestCategories from './components/InterestCategories';
import ProfessionalDevelopment from './components/ProfessionalDevelopment';
import LatestCourses from './components/LatestCourses';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <main>
          <HeroSection />
          <FeatureCards />
          <SuccessGateway />
          <EducationProcess />
          <StudentSupport />
          <InterestCategories />
          <ProfessionalDevelopment />
          <LatestCourses />
          <LatestNews />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;