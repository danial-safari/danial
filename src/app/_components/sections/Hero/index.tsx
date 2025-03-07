'use client';
import Background from './Background';
import Profile from './Profile';
import TitleDescription from './TitleDescription';
import TechStack from './TechStack';
import CTAButtons from './CTAButtons';
import StatusBadge from './StatusBadge';
import { Section } from '../../ui/Section';
import { IconCode, IconDesign, IconInnovation, IconPerformance } from '@/app/_components/icons';
import { IconConfig } from './hero.types';

const icons: IconConfig[] = [
  {
    icon: <IconCode className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />,
    position: "right-[15%] xl:right-[15%] top-[30%]"
  },
  {
    icon: <IconDesign className="w-8 h-8 text-primary group-hover:text-primary transition-colors" />,
    position: "left-[15%] xl:left-[15%] top-[30%]"
  },
  {
    icon: <IconPerformance className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />,
    position: "left-[20%] xl:left-[15%] bottom-[25%]"
  },
  {
    icon: <IconInnovation className="w-8 h-8 text-primary group-hover:text-primary transition-colors" />,
    position: "right-[20%] xl:right-[15%] bottom-[25%]"
  }
];

const HeroSection = () => {
  return (
    <Section
      id='hero'
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-20 sm:py-32"
    >
      <Background icons={icons} />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 sm:space-y-12">
          <Profile />
          <TitleDescription />
          <TechStack />
          <CTAButtons />
          <StatusBadge />
        </div>
      </div>
    </Section>

  );
};

export default HeroSection; 