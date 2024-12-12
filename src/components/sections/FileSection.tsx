import React from 'react';
import Section from './Section';

interface FileSectionProps {
  title: string;
  children: React.ReactNode;
}

const FileSection = ({ title, children }: FileSectionProps) => {
  return (
    <Section title={title} containerClassName="divide-y divide-slate-300/30 rounded bg-slate-50 text-base tracking-tight overflow-x-scroll sm:overflow-x-auto">
      {children}
    </Section>
  );
};

export default FileSection;
