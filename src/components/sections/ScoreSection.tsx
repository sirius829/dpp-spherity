import React from 'react';
import Section from './Section';

interface ScoreSectionProps {
  title: string;
  children: React.ReactNode;
}

const ScoreSection = ({ title, children }: ScoreSectionProps) => {
  return (
    <Section title={title} containerClassName="grid auto-cols-fr grid-cols-1 xs:grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3 lg:gap-6">
      {children}
    </Section>
  );
};

export default ScoreSection;
