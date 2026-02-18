'use client'
import React, {useState} from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Layout from '@/components/layout/ClientLayout';
import SkillsSection from '@/components/sections/SkillsSection';
import QnASection from '@/components/sections/QuestionsAnswers/QnASection';
import  EducationSection from '@/components/education';
import HeroSection from '@/components/HeroSection/HeroSection'
import SomnloggPresentation from '@/components/case/SomnloggPresentation'
import AdaptiveNavigation from '../components/AdaptiveNavigation';
import StockholmClock from '@/components/StockholmClock'


const App: React.FC = () => {
  const [somnloggTheme, setSomnloggTheme] = useState<'morning' | 'evening'>('evening');

  const handleSomnloggThemeChange = (themeName: 'morning' | 'evening') => {
    console.log('🎨 App received theme change:', themeName);
    setSomnloggTheme(themeName);
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <AdaptiveNavigation somnloggTheme={somnloggTheme} />
          <StockholmClock language="sv" />
          <section id="hero">
            <HeroSection/>
          </section>
          <section id="skills">
            <SkillsSection />
          </section>
          <section id="somnlogg" className="somnlogg-section">
            <SomnloggPresentation onThemeChange={handleSomnloggThemeChange} />
          </section>
          <section id="education">
            <EducationSection/>
          </section>
          <section id="qna">
            <QnASection/>
          </section>
          {/*Footer*/}
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;